// src/orders/orders.processor.ts
import { Process, Processor } from '@nestjs/bull';
import type { Job } from 'bull';
import { PrismaClient } from '@prisma/client';

@Processor('ticket-queue') // Harus sama dengan nama antrean di Module
export class OrdersProcessor {
  private prisma = new PrismaClient();

  @Process('buy-ticket') // Harus sama dengan nama job di Service
  async handleOrder(job: Job) {
    const { eventId, userId, quantity } = job.data;

    console.log(`Processing order for User ${userId}...`);

    // Kita gunakan Transaction agar Atomic (Stok berkurang & Order terbuat secara bersamaan)
    try {
      await this.prisma.$transaction(async (tx) => {
        // 1. Cek Stok Event dulu
        const event = await tx.event.findUnique({
          where: { id: eventId },
        });

        if (!event) {
          throw new Error('Event not found');
        }

        if (event.availableTickets < quantity) {
          throw new Error(`Sold Out! Sisa tiket: ${event.availableTickets}`);
        }

        // 2. Kurangi Stok
        await tx.event.update({
          where: { id: eventId },
          data: {
            availableTickets: event.availableTickets - quantity,
          },
        });

        // 3. Buat Order
        await tx.order.create({
          data: {
            eventId,
            userId,
            quantity,
            status: 'CONFIRMED',
          },
        });
      });

      console.log(`✅ Order sukses untuk User ${userId}`);
    } catch (error) {
      console.error(`❌ Gagal memproses order User ${userId}:`, error.message);
      // Di real app, kita bisa update status order jadi 'FAILED' atau kirim notif error
    }
  }
}

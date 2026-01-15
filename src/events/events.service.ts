// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaClient } from '@prisma/client'; // Import Prisma

@Injectable()
export class EventsService {
  // Inisialisasi Prisma
  private prisma = new PrismaClient();

  async create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({
      data: {
        name: createEventDto.name,
        description: createEventDto.description,
        totalTickets: createEventDto.totalTickets,
        // Saat event baru dibuat, tiket tersedia = total tiket
        availableTickets: createEventDto.totalTickets,
      },
    });
  }

  async findAll() {
    return this.prisma.event.findMany();
  }

  async findOne(id: number) {
    return this.prisma.event.findUnique({
      where: { id },
    });
  }

  // Kita skip update/remove dulu agar fokus ke flow utama
  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}

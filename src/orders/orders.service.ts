import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
// PERBAIKAN ERROR 2: Tambahkan kata 'type' di sini
import type { Queue } from 'bull';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectQueue('ticket-queue') private ticketQueue: Queue) {}

  async create(createOrderDto: CreateOrderDto) {
    // Logika queue Anda (simpan job)
    await this.ticketQueue.add('buy-ticket', createOrderDto);
    return { message: 'Order received! We are processing your request' };
  }

  // PERBAIKAN ERROR 1: Tambahkan method di bawah ini agar Controller tidak error

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}

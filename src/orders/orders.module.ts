// src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { BullModule } from '@nestjs/bull';
import { OrdersProcessor } from './orders.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'ticket-queue', // <--- 2. Pastikan nama ini SAMA PERSIS
    }),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersProcessor], // <--- 3. Pastikan ada di sini!
})
export class OrdersModule {}

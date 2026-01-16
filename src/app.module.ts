// src/app.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';

import { EventsModule } from './events/events.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }), // config redis lama biarkan

    // Setup Global Dashboard
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter,
    }),

    OrdersModule,
    EventsModule,
  ],
})
export class AppModule {}

// src/app.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EventsModule } from './events/events.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    EventsModule,
    OrdersModule,
  ],
})
export class AppModule {}

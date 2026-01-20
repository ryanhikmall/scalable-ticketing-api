import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// 👇 Pastikan baris ini ada!
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // 👇👇👇 SETUP SWAGGER MULAI DI SINI 👇👇👇
  const config = new DocumentBuilder()
    .setTitle('High Concurrency Ticketing API')
    .setDescription('Dokumentasi API Ticketing')
    .setVersion('1.0')
    .addTag('Orders')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  // 👆👆👆 SETUP SWAGGER SELESAI DI SINI 👆👆👆

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

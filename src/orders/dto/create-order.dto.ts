import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  eventId: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;

  // Di real app, userId diambil dari token JWT.
  // Untuk simulasi ini, kita kirim manual dulu.
  @IsNotEmpty()
  userId: string;
}

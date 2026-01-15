// src/events/dto/create-event.dto.ts
import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(1) // Stok minimal 1
  totalTickets: number;
}

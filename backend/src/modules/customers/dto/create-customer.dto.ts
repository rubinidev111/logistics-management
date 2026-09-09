import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty({
  example: 'John Doe',
  description: 'Customer full name',
})
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @ApiProperty({
  example: 'john@example.com',
  description: 'Customer email address',
})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
  example: '+1234567890',
  description: 'Customer phone number',
})
  @IsString()
  @IsNotEmpty()
  @Length(10, 20)
  phone: string;

  @ApiProperty({
  example: '123 Main St, Apt 4B',
  description: 'Customer address (optional)',
  required: false,
})
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({
  example: 'New York',
  description: 'Customer city',
})
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  city: string;

  @ApiProperty({
  example: 'NY',
  description: 'Customer state',
})
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  state: string;

  @ApiProperty({
  example: '10001',
  description: 'Customer postal code',
})
  @IsString()
  @IsNotEmpty()
  @Length(4, 10)
  postalCode: string;
}
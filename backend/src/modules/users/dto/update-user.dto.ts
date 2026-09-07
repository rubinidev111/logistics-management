import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

// export class UpdateUserDto {
//   @IsOptional()
//   @IsString()
//   @MinLength(2)
//   name?: string;

//   @IsOptional()
//   @IsEmail()
//   email?: string;

//   @IsOptional()
//   @IsString()
//   @MinLength(8)
//   password?: string;
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto.js';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
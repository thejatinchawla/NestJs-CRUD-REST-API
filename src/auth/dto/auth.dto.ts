import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class AuthdDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}

import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsEnum(['intern', 'engineer', 'admin'], {
    message: 'Valid Role Required',
  })
  role: 'intern' | 'engineer' | 'admin';
}

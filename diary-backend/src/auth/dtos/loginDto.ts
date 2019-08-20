import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    @Length(3, 100)
    email: string;

    @Length(6, 100)
    password: string;
}

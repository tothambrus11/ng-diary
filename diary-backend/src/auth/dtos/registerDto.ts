import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterDto {
    @IsEmail()
    @IsNotEmpty()
    @Length(3, 100)
    email: string;

    @Length(6, 100)
    password: string;

    @Length(1, 100)
    @IsString()
    displayName: string;
}

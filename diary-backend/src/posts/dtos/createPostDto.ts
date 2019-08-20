import { IsDate, IsDateString, IsInt, IsString, Length } from 'class-validator';

export class CreatePostDto {
    @IsString()
    @Length(1, 64)
    title: string;

    @IsString()
    content: string;

    @IsString()
    date: string;

    @IsInt()
    authorId: number;
}

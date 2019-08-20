import { NestFactory } from '@nestjs/core';
import { DiaryModule } from './diary.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(DiaryModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(3000);
}

bootstrap();

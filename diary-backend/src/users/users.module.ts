import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
    exports: [UsersService],
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    providers: [UsersService],
})
export class UsersModule {
}

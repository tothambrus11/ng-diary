import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [TypeOrmModule.forRoot(), AuthModule, PostsModule, UsersModule],
    providers: [],
})
export class DiaryModule {
}

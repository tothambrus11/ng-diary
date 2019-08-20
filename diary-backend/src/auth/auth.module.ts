import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from '../constants';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
    controllers: [
        AuthController,
    ],
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: '60s' },
        }),
        UsersModule,
    ],
    providers: [
        AuthService,
        UsersService,
    ],
})
export class AuthModule {
}

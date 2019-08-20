import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dtos/registerDto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/loginDto';
import { IJwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {
    }

    getToken(userId: number) {
        const payload: IJwtPayload = { id: userId };
        return this.jwtService.sign(payload);
    }

    register(userData: RegisterDto): Promise<InsertResult> {

        return new Promise((resolve, reject) => {
            this.usersService.findByEmail(userData.email).then((emailUser: UserEntity | null) => {
                if (emailUser !== null) {
                    reject(new BadRequestException('email_already_exists'));
                } else {
                    AuthService.encryptPassword(userData.password).then((hash: string) => {
                        const user = new UserEntity(
                            undefined,
                            userData.email,
                            hash,
                            userData.displayName,
                            new Date(Date.now()),
                        );

                        this.usersService.createUser(user)
                            .then((insertResult: InsertResult) => {
                                resolve(insertResult);
                            });
                    });

                }
            });
        });
    }

    private static async encryptPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async validateUser(loginData: LoginDto): Promise<any> {
        return new Promise((resolve) => {
            this.usersService.findByEmail(loginData.email)
                .then((dbUser: UserEntity) => {
                    if (!dbUser) {
                        resolve({ isValid: false });
                    } else {
                        bcrypt.compare(loginData.password, dbUser.passwordHash, (err, isValid) => {
                            if (isValid) {
                                resolve({ isValid: true, userId: dbUser.id });
                            } else {
                                resolve({ isValid: false });
                            }
                        });
                    }
                });
        });
    }

    checkToken(authToken: string): Promise<{ isValid: boolean, payload?: IJwtPayload }> {
        return new Promise((resolve) => {
            try {
                const payload = this.jwtService.verify(authToken);
                resolve({
                    isValid: payload.id !== undefined,
                    payload,
                });

            } catch (e) {
                resolve({
                    isValid: false,
                });
            }

        });
    }
}

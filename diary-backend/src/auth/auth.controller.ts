import { Body, Controller, HttpException, HttpStatus, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/registerDto';
import { LoginDto } from './dtos/loginDto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('register')
    register(@Body() userData: RegisterDto) {
        return this.authService.register(userData);
    }

    @Post('login')
    login(@Body() loginData: LoginDto) {
        return new Promise((resolve, reject) => {
            this.authService.validateUser(loginData).then((login: { isValid: boolean, userId?: number }) => {
                if (login.isValid) {
                    resolve({
                        token: this.authService.getToken(login.userId),
                    });
                } else {
                    reject(new UnauthorizedException('Wrong email or password'));
                }
            });
        });
    }

    @UseGuards(AuthGuard)
    @Post('check-token')
    checkToken() {
        return 'Hello World';
    }
}

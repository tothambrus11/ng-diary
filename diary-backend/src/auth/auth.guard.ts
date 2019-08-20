import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();

        return new Promise((resolve, reject) => {
            this.authService.checkToken(request.headers['auth-token'])
                .then((result) => {
                    if (result.isValid) {
                        resolve(true);
                    } else {
                        reject(new UnauthorizedException());
                    }
                });
        });
    }
}

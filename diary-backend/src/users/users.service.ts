import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {
    }

    createUser(user: UserEntity): Promise<InsertResult> {
        return this.userRepository.insert(user);
    }

    findById(id: number) {
        return this.userRepository.findOne(id);
    }

    findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email: email } });
    }
}

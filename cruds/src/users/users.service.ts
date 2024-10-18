import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';
import { Users } from './entity/users.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }

    getUsers(): Promise<Users[]> {
        return this.userRepository.find();
    }

    createUser(createUserDto: UsersDto): Promise<Users> {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    updateUser(updateUserDto: UsersDto, userId: number) {
        return this.userRepository.update(userId, updateUserDto);
    }

    findOneUser(id: number): Promise<Users> {
        return this.userRepository.findOne({ where: { id } });
    }

    deleteUser(userId: number) {
        return this.userRepository.delete(userId);
    }

    findByEmail(email: string) {
        return this.userRepository.findOne({ where: { email } });
    }
}

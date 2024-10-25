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

    async createUser(createUserDto: UsersDto): Promise<Users> {
        try {
            const { email } = createUserDto;
            const existUser = await this.userRepository.findOne({
                where: { email }
            });
            if (existUser) {
                throw new Error('User with this email already exists');
            }

            const newUser = this.userRepository.create(createUserDto);
            return this.userRepository.save(newUser);
        } catch (error) {
            throw new Error('Error Registering User');
        }
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

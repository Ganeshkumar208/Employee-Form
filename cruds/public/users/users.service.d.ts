import { Repository } from 'typeorm';
import { UsersDto } from './dto/users.dto';
import { Users } from './entity/users.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    getUsers(): Promise<Users[]>;
    createUser(createUserDto: UsersDto): Promise<Users>;
    updateUser(updateUserDto: UsersDto, userId: number): Promise<import("typeorm").UpdateResult>;
    findOneUser(id: number): Promise<Users>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
    findByEmail(email: string): Promise<Users>;
}

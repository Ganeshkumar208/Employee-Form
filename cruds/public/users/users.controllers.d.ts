import { UsersDto } from './dto/users.dto';
import { UserService } from './users.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/users.entity").Users[]>;
    createUser(createUserDto: UsersDto): Promise<import("./entity/users.entity").Users>;
    update(updateUserDto: UsersDto, id: number): Promise<import("typeorm").UpdateResult>;
    findOneUser(id: number): Promise<import("./entity/users.entity").Users>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}

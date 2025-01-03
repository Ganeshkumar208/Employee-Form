import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../users/entity/users.entity").Users>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersData } from './entity/users.entity';
import { UserController } from './users.controllers';
import { UserService } from './users.service';

@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
    imports: [TypeOrmModule.forFeature([UsersData])],
})
export class UserModule { }
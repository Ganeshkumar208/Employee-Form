import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsersDto } from './dto/users.dto';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/getUsers')
    getUsers() {
        return this.userService.getUsers();
    }

    @Post('/createUser')
    createUser(@Body() createUserDto: UsersDto) {
        return this.userService.createUser(createUserDto);
    }

    @Patch('/updateUser/:id')
    update(
        @Body() updateUserDto: UsersDto,
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.userService.updateUser(updateUserDto, id);
    }

    @Get('/getUser/:id')
    findOneUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOneUser(id);
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}

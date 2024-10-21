import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protect')
export class ProtectController {
    @UseGuards(AuthGuard('jwt'))
    @Get()
    protect() {
        return { message: 'I am protected route' };
    }
}
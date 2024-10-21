import { Module } from '@nestjs/common';
import { ProtectController } from './protect.controller';

@Module({
    controllers: [ProtectController],
})
export class ProtectModule { }
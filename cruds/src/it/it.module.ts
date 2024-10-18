/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ite } from "./it.entity";
import { ItController } from "./it.controller";
import { ItService } from "./it.service";

@Module({
    imports: [TypeOrmModule.forFeature([Ite])],
    controllers: [ItController],
    providers: [ItService],
})
export class Itm { }
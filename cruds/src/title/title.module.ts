/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { titleEntity } from "./title.entity"
import { titleController } from "./title.controller";
import { titleService } from "./title.service";
import { Ite } from "src/it/it.entity";
// import { Table } from "typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([titleEntity, Ite])],
    controllers: [titleController],
    providers: [titleService],
})
export class titleMod { }
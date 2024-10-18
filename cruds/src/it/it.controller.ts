/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Param } from "@nestjs/common";
import { ItService } from "./it.service";
import { CreatePto } from "./pto/createpto";
import { Ite } from "./it.entity";
// import { get } from "http";
@Controller('Ite')
export class ItController {
    constructor(private ItService: ItService) { }

    @Post('/create')
    create(@Body() pto: CreatePto) {
        return this.ItService.create(pto);
    }

    @Post('/readall')
    findMany() {
        return this.ItService.findMany();
    }

    @Post('/readone/:id')
    findOne(@Param('id') id: number) {
        return this.ItService.findOne(id);
    }

    @Post('update/:id')
    async update(@Param('id') id: number, @Body() createpto: CreatePto) {
        return await this.ItService.update(id, createpto);
    };


    @Post('delete/:id')
    delete(@Param('id') id: number) {
        return this.ItService.delete(id);
    }
}
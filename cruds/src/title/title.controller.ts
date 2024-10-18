/* eslint-disable prettier/prettier */
import { Body, Controller, Param, Post } from "@nestjs/common";
import { titleService } from "./title.service";
import { titleDto } from "./dto/titledto";

@Controller('table')
export class titleController {
   constructor(private titleservice: titleService) { }

   @Post('create')
   create(@Body() dto: titleDto) {
      return this.titleservice.create(dto);
   }

   @Post('showAll')
   showAll() {
      return this.titleservice.showAll();
   }

   @Post('delete/:title')
   delete(@Param('title') title: string) {
      return this.titleservice.delete(title);
   }
}   

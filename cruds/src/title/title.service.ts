/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { titleEntity } from './title.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { titleDto } from './dto/titledto';
import { Ite } from 'src/it/it.entity';
// import { titleDto } from "./dto/titledto";

@Injectable()
export class titleService {
    constructor(
        @InjectRepository(titleEntity)
        private readonly titleTableRepository: Repository<titleEntity>,
        @InjectRepository(Ite) private readonly IteRepository: Repository<Ite>,
    ) { }

    async create(dto: titleDto) {
        const partialentity: DeepPartial<titleEntity> = {
            title: dto.title,
        };
        console.log('one row inserted');
        return await this.titleTableRepository.save(partialentity);
    }

    showAll() {
        return this.titleTableRepository.find();
    }

    async delete(title: string) {
        const existsInTable = await this.IteRepository.findOne({
            where: { title },
        });
        if (existsInTable) {
            throw new NotFoundException('title already exists');
        }
        const todo = await this.titleTableRepository.findOne({ where: { title } });
        if (!todo) {
            throw new NotFoundException('title not found');
        }
        console.log('1 record deleted');
        return await this.titleTableRepository.remove(todo);
    }
}

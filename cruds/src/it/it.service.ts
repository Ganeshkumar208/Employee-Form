/* eslint-disable prettier/prettier */


import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Ite } from "./it.entity";
import { Repository } from "typeorm";
import { CreatePto } from "./pto/createpto";
// import { Injectable } from "@nestjs/common/interfaces";
@Injectable()
export class ItService {
  constructor(@InjectRepository(Ite) private readonly IteRepository: Repository<Ite>,
  ) { }
  async create(pto: CreatePto) {
    const Ite = this.IteRepository.create(pto);
    return await this.IteRepository.save(Ite);
  }

  findMany() {
    return this.IteRepository.find();
  }

  findOne(id: number) {
    return this.IteRepository.findOne({ where: { id } });
  }

  async update(id: number, pto: CreatePto) {
    const Its = await this.IteRepository.findOne({ where: { id } });
    Object.assign(Its, pto);

    return await this.IteRepository.save(Its);
  }

  async delete(id: number) {
    const itl = await this.IteRepository.findOne({ where: { id } });
    return await this.IteRepository.remove(itl);
  }
}
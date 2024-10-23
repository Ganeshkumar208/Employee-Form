import { Ite } from "./it.entity";
import { Repository } from "typeorm";
import { CreatePto } from "./pto/createpto";
export declare class ItService {
    private readonly IteRepository;
    constructor(IteRepository: Repository<Ite>);
    create(pto: CreatePto): Promise<Ite>;
    findMany(): Promise<Ite[]>;
    findOne(id: number): Promise<Ite>;
    update(id: number, pto: CreatePto): Promise<Ite>;
    delete(id: number): Promise<Ite>;
}

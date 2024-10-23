import { ItService } from "./it.service";
import { CreatePto } from "./pto/createpto";
import { Ite } from "./it.entity";
export declare class ItController {
    private ItService;
    constructor(ItService: ItService);
    create(pto: CreatePto): Promise<Ite>;
    findMany(): Promise<Ite[]>;
    findOne(id: number): Promise<Ite>;
    update(id: number, createpto: CreatePto): Promise<Ite>;
    delete(id: number): Promise<Ite>;
}

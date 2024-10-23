import { titleService } from "./title.service";
import { titleDto } from "./dto/titledto";
export declare class titleController {
    private titleservice;
    constructor(titleservice: titleService);
    create(dto: titleDto): Promise<{
        id?: number;
        title?: string;
    } & import("./title.entity").titleEntity>;
    showAll(): Promise<import("./title.entity").titleEntity[]>;
    delete(title: string): Promise<import("./title.entity").titleEntity>;
}

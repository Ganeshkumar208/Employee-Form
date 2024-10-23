import { titleEntity } from './title.entity';
import { Repository } from 'typeorm';
import { titleDto } from './dto/titledto';
import { Ite } from 'src/it/it.entity';
export declare class titleService {
    private readonly titleTableRepository;
    private readonly IteRepository;
    constructor(titleTableRepository: Repository<titleEntity>, IteRepository: Repository<Ite>);
    create(dto: titleDto): Promise<{
        id?: number;
        title?: string;
    } & titleEntity>;
    showAll(): Promise<titleEntity[]>;
    delete(title: string): Promise<titleEntity>;
}

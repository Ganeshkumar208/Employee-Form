"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleService = void 0;
const common_1 = require("@nestjs/common");
const title_entity_1 = require("./title.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const it_entity_1 = require("../it/it.entity");
let titleService = class titleService {
    constructor(titleTableRepository, IteRepository) {
        this.titleTableRepository = titleTableRepository;
        this.IteRepository = IteRepository;
    }
    async create(dto) {
        const partialentity = {
            title: dto.title,
        };
        console.log('one row inserted');
        return await this.titleTableRepository.save(partialentity);
    }
    showAll() {
        return this.titleTableRepository.find();
    }
    async delete(title) {
        const existsInTable = await this.IteRepository.findOne({
            where: { title },
        });
        if (existsInTable) {
            throw new common_1.NotFoundException('title already exists');
        }
        const todo = await this.titleTableRepository.findOne({ where: { title } });
        if (!todo) {
            throw new common_1.NotFoundException('title not found');
        }
        console.log('1 record deleted');
        return await this.titleTableRepository.remove(todo);
    }
};
exports.titleService = titleService;
exports.titleService = titleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(title_entity_1.titleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(it_entity_1.Ite)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], titleService);
//# sourceMappingURL=title.service.js.map
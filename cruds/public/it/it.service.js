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
exports.ItService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const it_entity_1 = require("./it.entity");
const typeorm_2 = require("typeorm");
let ItService = class ItService {
    constructor(IteRepository) {
        this.IteRepository = IteRepository;
    }
    async create(pto) {
        const Ite = this.IteRepository.create(pto);
        return await this.IteRepository.save(Ite);
    }
    findMany() {
        return this.IteRepository.find();
    }
    findOne(id) {
        return this.IteRepository.findOne({ where: { id } });
    }
    async update(id, pto) {
        const Its = await this.IteRepository.findOne({ where: { id } });
        Object.assign(Its, pto);
        return await this.IteRepository.save(Its);
    }
    async delete(id) {
        const itl = await this.IteRepository.findOne({ where: { id } });
        return await this.IteRepository.remove(itl);
    }
};
exports.ItService = ItService;
exports.ItService = ItService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(it_entity_1.Ite)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ItService);
//# sourceMappingURL=it.service.js.map
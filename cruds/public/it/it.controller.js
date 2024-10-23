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
exports.ItController = void 0;
const common_1 = require("@nestjs/common");
const it_service_1 = require("./it.service");
const createpto_1 = require("./pto/createpto");
let ItController = class ItController {
    constructor(ItService) {
        this.ItService = ItService;
    }
    create(pto) {
        return this.ItService.create(pto);
    }
    findMany() {
        return this.ItService.findMany();
    }
    findOne(id) {
        return this.ItService.findOne(id);
    }
    async update(id, createpto) {
        return await this.ItService.update(id, createpto);
    }
    ;
    delete(id) {
        return this.ItService.delete(id);
    }
};
exports.ItController = ItController;
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createpto_1.CreatePto]),
    __metadata("design:returntype", void 0)
], ItController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/readall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItController.prototype, "findMany", null);
__decorate([
    (0, common_1.Post)('/readone/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, createpto_1.CreatePto]),
    __metadata("design:returntype", Promise)
], ItController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ItController.prototype, "delete", null);
exports.ItController = ItController = __decorate([
    (0, common_1.Controller)('Ite'),
    __metadata("design:paramtypes", [it_service_1.ItService])
], ItController);
//# sourceMappingURL=it.controller.js.map
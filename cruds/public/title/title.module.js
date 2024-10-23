"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleMod = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const title_entity_1 = require("./title.entity");
const title_controller_1 = require("./title.controller");
const title_service_1 = require("./title.service");
const it_entity_1 = require("../it/it.entity");
let titleMod = class titleMod {
};
exports.titleMod = titleMod;
exports.titleMod = titleMod = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([title_entity_1.titleEntity, it_entity_1.Ite])],
        controllers: [title_controller_1.titleController],
        providers: [title_service_1.titleService],
    })
], titleMod);
//# sourceMappingURL=title.module.js.map
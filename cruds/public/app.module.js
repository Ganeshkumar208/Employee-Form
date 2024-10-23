"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const it_module_1 = require("./it/it.module");
const it_entity_1 = require("./it/it.entity");
const title_entity_1 = require("./title/title.entity");
const title_module_1 = require("./title/title.module");
const users_entity_1 = require("./users/entity/users.entity");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./authorization/auth.module");
const protect_module_1 = require("./protect/protect.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'test',
                entities: [
                    it_entity_1.Ite, title_entity_1.titleEntity,
                    users_entity_1.Users
                ],
                synchronize: false,
            }),
            it_module_1.Itm,
            title_module_1.titleMod,
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            protect_module_1.ProtectModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
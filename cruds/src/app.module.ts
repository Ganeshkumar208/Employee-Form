import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itm } from './it/it.module';
import { Ite } from './it/it.entity';
import { titleEntity } from './title/title.entity';
import { titleMod } from './title/title.module';
import { Users } from './users/entity/users.entity';
import { UserModule } from './users/users.module';
import { AuthModule } from './authorization/auth.module';
import { ProtectModule } from './protect/protect.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'dev.schemaxtech.in',
      port: 3306,
      username: 'sa_dev_user',
      password: 'Schemax@23',
      database: 'test',
      entities: [
        Ite, titleEntity,
        Users
      ],
      synchronize: false,
    }),
    Itm,
    titleMod,
    UserModule,
    AuthModule,
    ProtectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

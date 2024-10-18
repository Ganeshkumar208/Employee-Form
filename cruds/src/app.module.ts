import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itm } from './it/it.module';
import { Ite } from './it/it.entity';
import { titleEntity } from './title/title.entity';
import { titleMod } from './title/title.module';
// import { GunModule } from './gun/gun.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'',
      database:'test',
      entities:[Ite,titleEntity],
      synchronize:true,
    }),
    Itm,
    titleMod
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

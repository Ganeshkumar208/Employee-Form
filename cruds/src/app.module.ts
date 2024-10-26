import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Itm } from './it/it.module';
import { Ite } from './it/it.entity';
import { titleEntity } from './title/title.entity';
import { titleMod } from './title/title.module';
import { UsersData } from './users/entity/users.entity';
import { UserModule } from './users/users.module';
import { AuthModule } from './authorization/auth.module';
import { ProtectModule } from './protect/protect.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [
        Ite, titleEntity,
        UsersData
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












// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { Itm } from './it/it.module';
// import { Ite } from './it/it.entity';
// import { titleMod } from './title/title.module';
// import { titleEntity } from './title/title.entity';
// import { UserModule } from './users/users.module';
// import { UsersData } from './users/entity/users.entity';
// import { AuthModule } from './authorization/auth.module';
// import { ProtectModule } from './protect/protect.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       replication: {
//         master: {
//           host: 'localhost',
//           port: 3306,
//           username: 'root',
//           password: '',
//           database: 'test',
//         },
//         slaves: [
//           {
//             host: 'localhost',
//             port: 3308,
//             username: 'root',
//             password: '',
//             database: 'test',
//           },
//         ],
//       },
//       entities: [Ite, titleEntity, UsersData],
//       synchronize: true,
//     }),
//     Itm,
//     titleMod,
//     UserModule,
//     AuthModule,
//     ProtectModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }

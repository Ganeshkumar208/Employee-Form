import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Nest App')
    .setDescription('The Nest API description')
    .setVersion('1.0')
    .addTag('Nest Swagger Ui')
    .build();

  app.use(cors());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(5566);
  Logger.log(
    `🚀 Application is running on: http://localhost:5566/api`
  );
}

bootstrap();
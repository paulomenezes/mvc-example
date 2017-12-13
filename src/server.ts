import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, server);

  app.use(express.static('view/dist'));
  app.use(cors());

  await app.init();

  http.createServer(server).listen(8085);
}
bootstrap();

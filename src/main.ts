import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start(PORT: number) {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
start(3000);

import { NestFactory } from '@nestjs/core';
import { Verification-serviceModule } from './verification-service/verification-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Verification-serviceModule);
  await app.listen(3000);
}
bootstrap();

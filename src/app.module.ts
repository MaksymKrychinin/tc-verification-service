import { Module } from '@nestjs/common';
import { Verification-serviceModule } from './verification-service/verification-service.module';

@Module({
  imports: [Verification-serviceModule],
})
export class AppModule {}

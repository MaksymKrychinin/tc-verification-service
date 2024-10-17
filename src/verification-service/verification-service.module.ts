import { Module } from '@nestjs/common';
import { Verification-serviceService } from './services/verification-service.service';
import { Verification-serviceController } from './controllers/verification-service.controller';

@Module({
  controllers: [Verification-serviceController],
  providers: [Verification-serviceService],
})
export class Verification-serviceModule {}

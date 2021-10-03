import { Module } from '@nestjs/common';
import { BlingService } from './bling.service';
import { BlingController } from './bling.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [BlingController],
  providers: [BlingService],
  exports: [BlingService, HttpModule],
})
export class BlingModule {}

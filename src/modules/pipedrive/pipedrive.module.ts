import { Module } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';
import { PipedriveController } from './pipedrive.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PipedriveController],
  providers: [PipedriveService],
})
export class PipedriveModule {}

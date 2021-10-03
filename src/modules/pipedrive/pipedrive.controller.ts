import { Controller, Get } from '@nestjs/common';
import { PipedriveService } from './pipedrive.service';

@Controller('pipedrive')
export class PipedriveController {
  constructor(private readonly pipedriveService: PipedriveService) {}

  @Get('/won-deals')
  async getAllWonDeals() {
    return await this.pipedriveService.findAllWonDeals();
  }
}

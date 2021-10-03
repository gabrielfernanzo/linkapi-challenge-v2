import { Controller, Get, Post } from '@nestjs/common';
import { IntegrationService } from './integration.service';

@Controller('integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Post()
  async createBlingOrderFromDeal(): Promise<any> {
    return this.integrationService.migrate();
  }

  @Get()
  async getStoredData(): Promise<any> {
    return await this.integrationService.getData();
  }
}

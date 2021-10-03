import { Controller, Get, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DailyProfitModel } from '../database/schemas/daily-profit.schema';
import { IntegrationService } from './integration.service';

@Controller('integration')
@ApiTags('Integration')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Post('/migrate')
  @ApiCreatedResponse({
    description: 'Returns a newly created list sell orders',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error.',
  })
  @ApiOperation({ summary: 'Integrates Bling and Pipedrive' })
  async createBlingOrderFromDeal(): Promise<any> {
    return this.integrationService.migrate();
  }

  @Get('/record')
  @ApiOkResponse({
    description: 'Returns a list Daily summary of sales from the Database',
    type: DailyProfitModel,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error.',
  })
  @ApiOperation({ summary: 'Get list of Daily summary of sales' })
  async getStoredData(): Promise<any> {
    return await this.integrationService.getData();
  }
}

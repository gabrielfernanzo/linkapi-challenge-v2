import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { PipedriveService } from './pipedrive.service';

@Controller('pipedrive')
@ApiTags('Pipedrive')
export class PipedriveController {
  constructor(private readonly pipedriveService: PipedriveService) {}

  @Get('/won-deals')
  @ApiOkResponse({
    description: 'Returns a list of deals with the status set to "won"',
  })
  @ApiInternalServerErrorResponse({ description: `Internal Server Error` })
  @ApiOperation({ summary: 'Get list of Won Deals' })
  async getAllWonDeals() {
    return await this.pipedriveService.findAllWonDeals();
  }
}

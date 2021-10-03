import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { BlingService } from './bling.service';

@Controller('bling')
@ApiTags('Bling')
export class BlingController {
  constructor(private readonly blingService: BlingService) {}

  @Get('/orders')
  @ApiOkResponse({
    description: 'Returns a list of all Sell Orders from your Bling account.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error',
  })
  @ApiOperation({ summary: 'Get a list of Bling Sell Orders' })
  public async findAll(): Promise<any> {
    const { data: response } = await this.blingService.findAllSellOrders();
    return response;
  }
}

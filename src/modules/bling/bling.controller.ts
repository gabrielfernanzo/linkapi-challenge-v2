import { Controller, Get } from '@nestjs/common';
import { BlingService } from './bling.service';

@Controller('bling')
export class BlingController {
  constructor(private readonly blingService: BlingService) {}

  @Get('/orders')
  public async findAll(): Promise<any> {
    const { data: response } = await this.blingService.findAllSellOrders();
    return response;
  }
}

import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('HelloWorld')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({
    description:
      'Returns the most famous greeting whithin the programmers universe',
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal Server Error.',
  })
  @ApiOperation({
    summary: `Checks if everything it's ok.`,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}

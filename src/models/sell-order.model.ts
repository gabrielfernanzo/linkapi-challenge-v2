import { ApiResponseProperty } from '@nestjs/swagger';
export class SellOrder {
  @ApiResponseProperty()
  code: number;

  @ApiResponseProperty()
  salesman_name: string;

  @ApiResponseProperty()
  description: string;

  @ApiResponseProperty()
  products_qtt: number;

  @ApiResponseProperty()
  unit_value: number;

  @ApiResponseProperty()
  client_name: string;

  @ApiResponseProperty()
  client_email: string;
}

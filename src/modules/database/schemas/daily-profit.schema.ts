import { ApiResponseProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { SellOrder } from 'src/models/sell-order.model';

export const DailyProfit = new mongoose.Schema({
  deals: [],
  amount: Number,
  record_date: { type: Date, required: true },
  updated_at: { type: String, required: true },
});

export interface DailyProfit {
  _id?: string;
  deals: SellOrder[];
  record_date: Date;
  updated_at: string;
}

export class DailyProfitModel {
  @ApiResponseProperty()
  _id?: string;

  @ApiResponseProperty({ type: [SellOrder] })
  deals: SellOrder[];

  @ApiResponseProperty()
  record_date: Date;

  @ApiResponseProperty()
  updated_at: string;
}

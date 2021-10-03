import * as mongoose from 'mongoose';
import { SellOrder } from 'src/models/sell-order.model';

export const DailyProfit = new mongoose.Schema({
  deals: [],
  ammount: Number,
  record_date: { type: Date, required: true },
  updated_at: { type: String, required: true },
});

export interface DailyProfit {
  _id: string;
  deals: SellOrder[];
  record_date: Date;
  updated_at: string;
}

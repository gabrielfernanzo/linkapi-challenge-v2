import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DailyProfit } from './schemas/daily-profit.schema';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel('DailyProfit')
    private readonly dailyProfit: Model<DailyProfit>,
  ) {}

  async find(filter?: { record_date: Date }): Promise<any> {
    return await this.dailyProfit.find();
  }

  async createDailyProfit(dailyProfit: DailyProfit): Promise<any> {
    return await this.dailyProfit.create(dailyProfit);
  }

  async updateDailyProfit(
    identifier: Date,
    dailyProfit: DailyProfit,
  ): Promise<any> {
    return await this.dailyProfit.updateOne(
      { where: { record_date: identifier } },
      { $set: dailyProfit },
    );
  }

  async deleteDailyProfit(identifier: Date): Promise<any> {
    return await this.dailyProfit.updateOne({
      where: { record_date: identifier },
    });
  }
}

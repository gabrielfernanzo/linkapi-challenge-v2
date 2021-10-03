import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Functions } from 'src/utils/Functions';
import { DailyProfit } from './schemas/daily-profit.schema';

@Injectable()
export class DatabaseService {
  public utils: Functions;

  constructor(
    @InjectModel('DailyProfit')
    private readonly dailyProfit: Model<DailyProfit>,
  ) {
    this.utils = new Functions();
  }

  /**
   * @method Search through the DailyProfits collection
   * @param filter `record_date` (not implemented)
   * @returns a list Daily Profits objects
   */
  async find(filter?: { record_date: Date }): Promise<any> {
    return await this.dailyProfit.find(filter);
  }

  /**
   * @method Chekcs if this record already exists and if it does
   * so then it gets updated else a new one is created
   * @param newDailyProfit
   * @returns a newly created daily profit
   */
  async createDailyProfit(newDailyProfit: DailyProfit): Promise<any> {
    try {
      const alreadyExists = await this.dailyProfit.findOne({
        record_date: this.utils.getCurrentDate(),
      });
      console.log('already:', alreadyExists);
      if (alreadyExists !== null) {
        console.log('=> Updating profits.');
        return {
          status: 'success',
          res: await this.dailyProfit.updateOne(newDailyProfit),
          message: 'This record is already alrealdy exists.',
        };
      }
      return await this.dailyProfit.create(newDailyProfit);
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to create or update a record.',
      );
      throw err;
    }
  }

  /**
   * @method Updates a record
   * (no endpoint)
   * @param identifier `record_date`
   * @param dailyProfit
   * @returns a newly created record
   */
  async updateDailyProfit(
    identifier: Date,
    dailyProfit: DailyProfit,
  ): Promise<any> {
    return await this.dailyProfit.updateOne(
      { where: { record_date: identifier } },
      { $set: dailyProfit },
    );
  }
  /**
   * @method Deletes a record
   * @param identifier `record_date`
   * (no endpoint)
   * @returns unknown object
   */
  async deleteDailyProfit(identifier: Date): Promise<any> {
    return await this.dailyProfit.updateOne({
      where: { record_date: identifier },
    });
  }
}

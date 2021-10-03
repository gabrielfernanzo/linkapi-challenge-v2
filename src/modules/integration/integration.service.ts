import { Injectable, Query } from '@nestjs/common';
import { SellOrder } from 'src/models/sell-order.model';
import { BlingService } from '../bling/bling.service';
import { DatabaseService } from '../database/database.service';
import { PipedriveService } from '../pipedrive/pipedrive.service';

// custom imports
import {
  dealsToDailyProfit,
  dealToSellOrder,
  toXmlSellOrder,
} from 'src/utils/Functions';

@Injectable()
export class IntegrationService {
  constructor(
    private ppdService: PipedriveService,
    private blingService: BlingService,
    private databaseService: DatabaseService,
  ) {}

  /**
   * @method Creates the integration between **Pipedrive** and **Bling** platforms by taking the won deals
   * from Pipedrive and posting it on Bling as a new sell Order, and storing it a **MongoDb** database after.
   * @returns a **list** of newly created sell Orders.
   * @author gabrielFernandes-dev.
   */
  async migrate() {
    // Finds all deals with status equals to "won"
    const wonDealsList = await this.ppdService.findAllWonDeals();
    // On each iteration a deal is piped into a sell order, then into a xml and then posted
    wonDealsList.forEach(async (deal) => {
      const sellOrder: SellOrder = dealToSellOrder({
        ...deal,
        description: `Produto ${deal.id} de ${deal.org_id.name}`,
      });
      const xmlOrder = toXmlSellOrder(sellOrder);
      const response = await this.blingService.createSellOrder(xmlOrder);
      if (response?.retorno.erros) {
        console.log(`Sell Order id=${deal.id} already registered at Bling.`);
        return;
      }
    });
    const dailyProfit = dealsToDailyProfit(wonDealsList);
    return await this.databaseService.createDailyProfit(dailyProfit);
  }

  /**
   * @param filters
   * @returns all database records.
   */
  async getData(@Query() filters?: any) {
    try {
      return {
        status: 'success',
        data: await this.databaseService.find(filters),
      };
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to access database records.',
      );
      throw err;
    }
  }
}

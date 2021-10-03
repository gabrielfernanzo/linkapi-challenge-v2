import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BlingService {
  constructor(private http: HttpService, private config: ConfigService) {}

  private baseUrl: string = this.config.get('BLING_URL');
  private blingApiKey: string = this.config.get('BLING_API_KEY');

  /**
   * Connects to the Bling api and retrieve data
   * @returns a list containing all sell orders
   */
  async findAllSellOrders(): Promise<any> {
    try {
      return await lastValueFrom(
        this.http.get(
          `${this.baseUrl}/pedidos/json?apikey=${this.blingApiKey}`,
        ),
      );
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to get all sell orders.',
      );
      throw err;
    }
  }

  /**
   * Connects to the Bling platforma and inserts data
   * @param xmlOrder containing the order data
   * @returns a new sell order
   */
  async createSellOrder(xmlOrder: string): Promise<any> {
    try {
      const { data: res } = await lastValueFrom(
        this.http.post(
          `${this.baseUrl}/pedido/json?apikey=${this.blingApiKey}&xml=${xmlOrder}`,
        ),
      );
      return res;
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to create new sell order.',
      );
      throw err;
    }
  }
}

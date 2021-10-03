import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BlingService {
  constructor(private http: HttpService, private config: ConfigService) {}

  private baseUrl: string = this.config.get('BLING_URL');
  private blingApiKey: string = this.config.get('BLING_API_KEY');

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

  async createSellOrder(xmlOrder: string): Promise<any> {
    try {
      return await lastValueFrom(
        this.http.post(
          `${this.baseUrl}/pedidos/json?apikey=${this.blingApiKey}&xml=${xmlOrder}`,
        ),
      );
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to create new sell order.',
      );
      throw err;
    }
  }
}

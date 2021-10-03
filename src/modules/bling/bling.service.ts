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
    return await lastValueFrom(
      this.http.get(`${this.baseUrl}/pedidos/json?apikey=${this.blingApiKey}`),
    );
  }

  async createSellOrder(xmlOrder: string): Promise<any> {
    return await lastValueFrom(
      this.http.post(
        `${this.baseUrl}/pedidos/json?apiKey=${this.blingApiKey}&xml=${xmlOrder}`,
      ),
    );
  }
}

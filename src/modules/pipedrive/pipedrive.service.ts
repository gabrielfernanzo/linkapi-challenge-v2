/* eslint-disable @typescript-eslint/no-var-requires */
const pipedrive = require('pipedrive');
const { StatusEnum } = require('pipedrive');

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PipedriveService {
  public ppd: any = pipedrive;

  constructor(private http: HttpService, private config: ConfigService) {
    this.setUp();
  }

  private setUp(): void {
    this.ppd.Configuration.apiToken = this.config.get('PIPEDRIVE_API_TOKEN');
  }

  public async findAllWonDeals(): Promise<any> {
    const { data: deals } = await this.ppd.DealsController.getAllDeals({
      status: StatusEnum.WON,
    });
    if (!deals) throw 'No deals with "won" status were found on your account';
    return deals;
  }
}

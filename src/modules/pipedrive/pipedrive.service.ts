/* eslint-disable @typescript-eslint/no-var-requires */
const pipedrive = require('pipedrive');
const { StatusEnum } = require('pipedrive');

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PipedriveService {
  public ppd: any = pipedrive;

  constructor(private config: ConfigService) {
    this.setUp();
  }

  /**
   * @method API token configuraion setup.
   * @returns void.
   */
  private setUp(): void {
    this.ppd.Configuration.apiToken = this.config.get('PIPEDRIVE_API_TOKEN');
  }

  /**
   * @method Search deals with status set as _"won"_ in **Pipedrive**.
   * @returns a **list** containing all those deals.
   * @author gabrielFernandes-dev.
   */
  public async findAllWonDeals(): Promise<any> {
    try {
      const { data: deals } = await this.ppd.DealsController.getAllDeals({
        status: StatusEnum.WON,
      });
      if (!deals) throw 'No deals with "won" status were found on your account';
      return deals;
    } catch (err) {
      console.log(
        'ERROR: An error occurred while trying to find deals with status = "won".',
      );
      throw err;
    }
  }
}

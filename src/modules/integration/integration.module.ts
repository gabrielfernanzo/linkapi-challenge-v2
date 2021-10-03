import { Module } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { IntegrationController } from './integration.controller';
import { PipedriveModule } from '../pipedrive/pipedrive.module';
import { BlingModule } from '../bling/bling.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [PipedriveModule, BlingModule, DatabaseModule],
  controllers: [IntegrationController],
  providers: [IntegrationService],
})
export class IntegrationModule {}

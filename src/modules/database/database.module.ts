import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { DailyProfit } from './schemas/daily-profit.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'DailyProfit', schema: DailyProfit }]),
  ],
  controllers: [DatabaseController],
  providers: [DatabaseService],
})
export class DatabaseModule {}

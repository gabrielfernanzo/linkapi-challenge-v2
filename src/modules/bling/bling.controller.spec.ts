import { Test, TestingModule } from '@nestjs/testing';
import { BlingController } from './bling.controller';
import { BlingService } from './bling.service';

describe('BlingController', () => {
  let controller: BlingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlingController],
      providers: [BlingService],
    }).compile();

    controller = module.get<BlingController>(BlingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

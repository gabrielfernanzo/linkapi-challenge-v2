import { Test, TestingModule } from '@nestjs/testing';
import { IntegrationController } from './integration.controller';
import { IntegrationService } from './integration.service';

describe('IntegrationController', () => {
  let controller: IntegrationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegrationController],
      providers: [IntegrationService],
    }).compile();

    controller = module.get<IntegrationController>(IntegrationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

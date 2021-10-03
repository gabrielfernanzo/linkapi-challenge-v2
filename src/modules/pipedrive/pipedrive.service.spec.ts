import { Test, TestingModule } from '@nestjs/testing';
import { PipedriveService } from './pipedrive.service';

describe('PipedriveService', () => {
  let service: PipedriveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipedriveService],
    }).compile();

    service = module.get<PipedriveService>(PipedriveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { LVRService } from './lvr.service';

describe('LVRService', () => {
  let service: LVRService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LVRService],
    }).compile();

    service = module.get<LVRService>(LVRService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

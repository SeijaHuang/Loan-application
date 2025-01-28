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

  const baseCalLVRData = {
    loanAmount: 100000,
    estimatedPropertyValue: 200000,
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should calculate LVR based on loan amount and estimated property value', async () => {
    const LVR: string = await service.calLVR(baseCalLVRData);
    expect(LVR).toBe('50.00%');
  });

  it('should calculate LVR based on loan amount, cash out amount and estimated property value', async () => {
    const LVR: string = await service.calLVR({
      ...baseCalLVRData,
      cashOutAmount: 50000,
    });
    expect(LVR).toBe('75.00%');
  });

  it('should calculate LVR based on loan amount, cash out amount and property valuation if property valuation provided', async () => {
    const LVR: string = await service.calLVR({
      ...baseCalLVRData,
      cashOutAmount: 50000,
      propertyValuation: 300000,
    });
    expect(LVR).toBe('50.00%');
  });
});

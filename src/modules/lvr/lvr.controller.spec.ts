import { Test, TestingModule } from '@nestjs/testing';
import { LVRController } from './lvr.controller';
import { LVRService } from './lvr.service';
import { CalLVRDto } from './dto/CalLVRDto.dto';

describe('LVRController', () => {
  let controller: LVRController;
  const validTestData: CalLVRDto = {
    loanAmount: 100000,
    cashOutAmount: 50000,
    estimatedPropertyValue: 200000,
    propertyValuation: 250000,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LVRController],
      providers: [LVRService],
    }).compile();

    controller = module.get<LVRController>(LVRController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should back IGeneric Response if successfully calculated', async () => {
    const response = await controller.callLVR(validTestData);
    expect(response).toEqual({
      data: '60.00%',
      success: true,
    });
  });
});

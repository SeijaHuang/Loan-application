import { Test, TestingModule } from '@nestjs/testing';
import { LvrController } from './lvr.controller';

describe('LvrController', () => {
  let controller: LvrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LvrController],
    }).compile();

    controller = module.get<LvrController>(LvrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { plainToInstance } from 'class-transformer';
import { CalLVRDto } from './CalLVRDto.dto';
import { validate } from 'class-validator';

describe('calLVRDto', () => {
  // valid test case
  it('should pass validation when all fields are valid', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      cashOutAmount: 50000,
      estimatedPropertyValue: 200000,
      propertyValuation: 250000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(0);
  });

  // loadAmount validation cases start here
  it('should fail when loadAmount is not provided', async () => {
    const dto = plainToInstance(CalLVRDto, {
      estimatedPropertyValue: 200000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('loanAmount');
    expect(error[0].constraints.isNotEmpty).toBeDefined();
  });

  it('should fail when loadAmount is not a number', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: '100000',
      estimatedPropertyValue: 200000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('loanAmount');
    expect(error[0].constraints.isNumber).toBeDefined();
  });

  it('should fail when loadAmount is less than 1', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 0,
      estimatedPropertyValue: 200000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('loanAmount');
    expect(error[0].constraints.min).toBeDefined();
  });

  // estimatedPropertyValue validation cases start here
  it('should fail when estimatedPropertyValue is not provided', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('estimatedPropertyValue');
    expect(error[0].constraints.isNotEmpty).toBeDefined();
  });

  it('should fail when estimatedPropertyValue is not a number', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      estimatedPropertyValue: '200000',
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('estimatedPropertyValue');
    expect(error[0].constraints.isNumber).toBeDefined();
  });

  it('should fail when estimatedPropertyValue is less than 1', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      estimatedPropertyValue: 0,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('estimatedPropertyValue');
    expect(error[0].constraints.min).toBeDefined();
  });

  // cashOutAmount validation cases start here
  it('should pass validation when cashOutAmount is not a number', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      cashOutAmount: '50000',
      estimatedPropertyValue: 200000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('cashOutAmount');
    expect(error[0].constraints.isNumber).toBeDefined();
  });

  it('should pass validation when cashOutAmount is less than 0', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      cashOutAmount: -1,
      estimatedPropertyValue: 200000,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('cashOutAmount');
    expect(error[0].constraints.min).toBeDefined();
  });

  // propertyValuation validation cases start here
  it('should pass validation when propertyValuation is not a number', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      estimatedPropertyValue: 200000,
      propertyValuation: '250000',
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('propertyValuation');
    expect(error[0].constraints.isNumber).toBeDefined();
  });

  it('should pass validation when propertyValuation is less than 0', async () => {
    const dto = plainToInstance(CalLVRDto, {
      loanAmount: 100000,
      estimatedPropertyValue: 200000,
      propertyValuation: -1,
    });
    const error = await validate(dto);
    expect(error).toHaveLength(1);
    expect(error[0].property).toBe('propertyValuation');
    expect(error[0].constraints.min).toBeDefined();
  });
});

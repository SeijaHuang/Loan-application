import { IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';

export class CalLVRDto {
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  loanAmount: number;

  @Min(0)
  @IsNumber()
  @IsOptional()
  cashOutAmount?: number;

  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  estimatedPropertyValue: number;

  @Min(0)
  @IsNumber()
  @IsOptional()
  propertyValuation?: number;
}

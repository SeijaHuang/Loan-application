import { BadRequestException, Injectable } from '@nestjs/common';
import { CallLVRDto } from './dto/CalLVRDto.dto';
import { MESSAGES } from 'src/constants/message.constant';

@Injectable()
export class LVRService {
  private readonly _fixNumber: number = 2;
  async calLVR(calLVRDto: CallLVRDto): Promise<string> {
    const {
      loanAmount,
      cashOutAmount,
      estimatedPropertyValue,
      propertyValuation,
    } = calLVRDto;
    const borrowingAmount: number = cashOutAmount
      ? loanAmount + cashOutAmount
      : loanAmount;
    const propertyValue: number = propertyValuation || estimatedPropertyValue;

    if (propertyValue === 0) {
      throw new BadRequestException(MESSAGES.ERROR.INVALID_PROPERTY_VALUE);
    }

    const lvr: string = `${((borrowingAmount / propertyValue) * 100).toFixed(
      this._fixNumber,
    )}%`;
    return lvr;
  }
}

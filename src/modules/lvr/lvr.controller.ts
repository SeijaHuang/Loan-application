import { Body, Controller, Post } from '@nestjs/common';
import { CallLVRDto } from './dto/CalLVRDto.dto';
import { IGenericResponse } from 'src/interface/generic-response';
import { LVRService } from './lvr.service';

@Controller('lvrs')
export class LVRController {
  constructor(private readonly lvrService: LVRService) {}
  @Post()
  async callLVR(
    @Body() calLVRDto: CallLVRDto,
  ): Promise<IGenericResponse<string>> {
    const result: string = await this.lvrService.calLVR(calLVRDto);
    return {
      data: result,
      success: true,
    };
  }
}

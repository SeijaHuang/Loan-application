import { Body, Controller, Post } from '@nestjs/common';
import { CalLVRDto } from './dto/CalLVRDto.dto';
import { IGenericResponse } from '../../interfaces/generic-response';
import { LVRService } from './lvr.service';

@Controller('lvrs')
export class LVRController {
  constructor(private readonly lvrService: LVRService) {}
  @Post()
  async callLVR(
    @Body() calLVRDto: CalLVRDto,
  ): Promise<IGenericResponse<string>> {
    const result: string = await this.lvrService.calLVR(calLVRDto);
    return {
      data: result,
      success: true,
    };
  }
}

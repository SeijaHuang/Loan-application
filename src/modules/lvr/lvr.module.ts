import { Module } from '@nestjs/common';
import { LVRService } from './lvr.service';
import { LVRController } from './lvr.controller';

@Module({
  providers: [LVRService],
  controllers: [LVRController],
})
export class LVRModule {}

import { Module } from '@nestjs/common';
import { LVRModule } from './modules/lvr/lvr.module';

@Module({
  imports: [LVRModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

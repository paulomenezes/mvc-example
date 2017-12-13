import { Module } from '@nestjs/common';
import { CanvasController } from './canvas.controller';
import { CanvasModel } from './canvas.model';
import { canvasProviders } from './canvas.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  modules: [DatabaseModule],
  controllers: [CanvasController],
  components: [CanvasModel, ...canvasProviders]
})
export class CanvasModule {}

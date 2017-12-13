import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { CanvasModule } from './canvas/canvas.module';

@Module({
  modules: [DatabaseModule, CanvasModule],
  controllers: [],
  components: []
})
export class ApplicationModule {}

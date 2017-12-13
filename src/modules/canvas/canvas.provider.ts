import { Connection } from 'mongoose';
import { CanvasSchema } from './canvas.schema';

export const canvasProviders = [
  {
    provide: 'CanvasModelToken',
    useFactory: (connection: Connection) => connection.model('Canvas', CanvasSchema),
    inject: ['DbConnectionToken']
  }
];

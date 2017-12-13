import * as mongoose from 'mongoose';

export const CanvasSchema = new mongoose.Schema({
  objects: Array
});

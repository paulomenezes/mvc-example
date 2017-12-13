import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Canvas } from './canvas.interface';
import { CanvasDto } from './canvas.dto';

@Component()
export class CanvasModel {
  constructor(@Inject('CanvasModelToken') private readonly canvasModel: Model<Canvas>) {}

  async findAll(): Promise<Canvas[]> {
    return await this.canvasModel.find().exec();
  }

  async create(createCanvasDto: CanvasDto): Promise<Canvas> {
    const createdCanvas = new this.canvasModel(createCanvasDto);
    return await createdCanvas.save();
  }
}

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CanvasDto } from './canvas.dto';
import { CanvasModel } from './canvas.model';
import { Canvas } from './canvas.interface';

@Controller('canvas')
export class CanvasController {
  constructor(private readonly canvasModel: CanvasModel) {}

  @Get()
  async findAll(): Promise<Canvas[]> {
    return this.canvasModel.findAll();
  }

  @Post()
  async create(@Body() createCanvas: CanvasDto) {
    this.canvasModel.create(createCanvas);
  }
}

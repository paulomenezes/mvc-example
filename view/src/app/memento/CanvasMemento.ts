import Canvas from './Canvas';

export default class CanvasMemento {
  private canvas: Canvas;

  constructor(canvas: Canvas) {
    this.canvas = canvas;
  }

  getLastCanvas() {
    return this.canvas;
  }
}

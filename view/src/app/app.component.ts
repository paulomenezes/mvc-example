import { Component, OnInit } from '@angular/core';
import Canvas from './memento/Canvas';
import CanvasCareTaker from './memento/CanvasCareTaker';
declare var fabric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canvas: any;
  canvasState: Canvas;
  careTaker: CanvasCareTaker;

  isUndoEnable: boolean = false;
  isRedoEnable: boolean = false;

  constructor() {
    this.careTaker = new CanvasCareTaker();
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('c');
    this.canvasState = this.canvas.toJSON();
    this.careTaker.addMemento(this.canvasState);

    this.canvas.on('object:modified', this.saveState.bind(this));
  }

  saveState(evt) {
    this.canvasState = this.canvas.toJSON();
    this.careTaker.addMemento(this.canvasState);

    this.enableButtons();
  }

  addShape(type: string) {
    const pos = {
      left: this.random(0, 480),
      top: this.random(0, 480)
    };

    let shape = null;

    if (type === 'rect') {
      shape = new fabric.Rect({
        ...pos,
        fill: 'red',
        width: 20,
        height: 20
      });
    } else {
      shape = new fabric.Circle({
        radius: 10,
        fill: 'blue',
        ...pos
      });
    }

    this.canvas.add(shape);
    this.saveState();
  }

  undo() {
    this.canvas.clear();
    const state = this.careTaker.getLastState();
    this.canvas.loadFromJSON(state, () => {
      this.canvas.renderAll();
    });

    this.enableButtons();
  }

  redo() {
    this.canvas.clear();
    const state = this.careTaker.getNewerState();
    this.canvas.loadFromJSON(state, () => {
      this.canvas.renderAll();
    });

    this.enableButtons();
  }

  enableButtons() {
    this.isUndoEnable = this.careTaker.isUndoEnable();
    this.isRedoEnable = this.careTaker.isRedoEnable();
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }
}

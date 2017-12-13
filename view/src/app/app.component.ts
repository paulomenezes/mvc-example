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

    this.canvas.on('object:modified', this.saveState.bind(this));
  }

  saveState(evt) {
    console.log('saveState', evt, this.canvas.toJSON());
    this.careTaker.addMemento(this.canvasState);

    this.canvasState = this.canvas.toJSON();

    this.isUndoEnable = this.careTaker.isUndoEnable();
    this.isRedoEnable = this.careTaker.isRedoEnable();
    console.log(this.isUndoEnable, this.isRedoEnable);
  }

  addShape(type: string) {
    if (type === 'rect') {
      const rect = new fabric.Rect({
        left: this.random(0, 480),
        top: this.random(0, 480),
        fill: 'red',
        width: 20,
        height: 20
      });

      this.canvas.add(rect);
      this.saveState();
    } else {
      const circle = new fabric.Circle({
        radius: 10,
        fill: 'blue',
        left: this.random(0, 480),
        top: this.random(0, 480)
      });

      this.canvas.add(circle);
      this.saveState();
    }
  }

  undo() {
    this.canvas.clear();
    const state = this.careTaker.getLastState();
    console.log('undo', state);
    this.canvas.loadFromJSON(state, () => {
      this.canvas.renderAll();
    });

    this.isUndoEnable = this.careTaker.isUndoEnable();
    this.isRedoEnable = this.careTaker.isRedoEnable();
    console.log(this.isUndoEnable, this.isRedoEnable);
  }

  redo() {
    this.canvas.clear();
    const state = this.careTaker.getNewerState();
    console.log('undo', state);
    this.canvas.loadFromJSON(state, () => {
      this.canvas.renderAll();
    });

    this.isUndoEnable = this.careTaker.isUndoEnable();
    this.isRedoEnable = this.careTaker.isRedoEnable();
    console.log(this.isUndoEnable, this.isRedoEnable);
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }
}

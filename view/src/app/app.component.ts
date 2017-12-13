import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import CanvasCareTaker from './memento/CanvasCareTaker';

declare var fabric: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  canvas: any;
  canvasCareTaker: CanvasCareTaker;

  isUndoEnable: boolean = false;
  isRedoEnable: boolean = false;

  constructor(private http: Http) {
    this.canvasCareTaker = new CanvasCareTaker();
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('c');
    this.saveState();

    this.canvas.on('object:modified', () => {
      this.saveState();
      this.enableButtons();
    });
  }

  saveState(evt?: any) {
    this.canvasCareTaker.addMemento(this.canvas.toJSON());
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
        ...pos,
        radius: 10,
        fill: 'blue'
      });
    }

    this.canvas.add(shape);
    this.saveState();
    this.enableButtons();
  }

  undo() {
    const state = this.canvasCareTaker.getLastState();
    this.loadFromJSON(state);
  }

  redo() {
    const state = this.canvasCareTaker.getNewerState();
    this.loadFromJSON(state);
  }

  loadFromJSON(state) {
    this.canvas.clear();
    this.canvas.loadFromJSON(state, () => {
      this.canvas.renderAll();
    });

    this.enableButtons();
  }

  enableButtons() {
    this.isUndoEnable = this.canvasCareTaker.isUndoEnable();
    this.isRedoEnable = this.canvasCareTaker.isRedoEnable();
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * max) + min;
  }

  async save() {
    try {
      await this.http.post('http://localhost:8085/canvas', this.canvas.toJSON()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}

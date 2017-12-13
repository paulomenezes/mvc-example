import CanvasMemento from './CanvasMemento';

export default class CanvasCareTaker {
  private index: number = 0;
  private states: CanvasMemento[];

  constructor() {
    this.states = [];
  }

  addMemento(memento: CanvasMemento) {
    this.states.push(memento);
    this.index++;
  }

  getLastState() {
    if (this.index === this.states.length) {
      this.index--;
    }

    this.index--;
    return this.states[this.index];
  }

  getNewerState() {
    this.index++;
    return this.states[this.index];
  }

  isUndoEnable() {
    return this.index > 0;
  }

  isRedoEnable() {
    return this.index < this.states.length - 1;
  }
}

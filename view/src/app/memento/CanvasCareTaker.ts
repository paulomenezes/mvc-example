import CanvasMemento from './CanvasMemento';

export default class CanvasCareTaker {
  private index: number = 0;
  protected states: CanvasMemento[];

  constructor() {
    this.states = [];
  }

  addMemento(memento: CanvasMemento) {
    this.states.push(memento);
    this.index++;
    console.log('Saved State', this.states, this.index);
  }

  getLastState() {
    this.index--;
    console.log('Get Last State', this.index);
    const state = this.states[this.index];
    //this.index--;
    return state;
  }

  getNewerState() {
    if (this.index === 0) {
      this.index = 1;
    }

    console.log('Get Newer State', this.index);
    const state = this.states[this.index];
    this.index++;
    return state;
  }

  isUndoEnable() {
    return this.index > 0;
  }

  isRedoEnable() {
    console.log(this.index, this.states.length);
    return this.index < this.states.length;
  }
}

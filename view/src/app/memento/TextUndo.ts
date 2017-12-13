class Text {
  private text: string[];

  constructor() {
    this.text = [];
  }

  writeText(newText: string) {
    this.text.push(newText);
  }

  toString() {
    return this.text[this.text.length - 1];
  }

  undo() {
    this.text.pop();
  }
}

export default class TextUndo {
  private text: Text;

  constructor() {
    this.text = new Text();
    this.text.writeText("Texto 01");
    this.text.writeText("Texto 02");
    this.text.writeText("Texto 03");

    console.log(this.text.toString()); // Texto 03
    this.text.undo();
    console.log(this.text.toString()); // Texto 02
    this.text.undo();
    console.log(this.text.toString()); // Texto 01
  }
}

new TextUndo();

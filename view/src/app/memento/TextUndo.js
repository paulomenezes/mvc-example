"use strict";
exports.__esModule = true;
var Text = /** @class */ (function () {
    function Text() {
        this.text = [];
    }
    Text.prototype.writeText = function (newText) {
        this.text.push(newText);
    };
    Text.prototype.toString = function () {
        return this.text[this.text.length - 1];
    };
    Text.prototype.undo = function () {
        this.text.pop();
    };
    return Text;
}());
var TextUndo = /** @class */ (function () {
    function TextUndo() {
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
    return TextUndo;
}());
exports["default"] = TextUndo;
new TextUndo();

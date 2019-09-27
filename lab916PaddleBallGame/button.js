// Olivia Cordero
//9.16.19
//PaddleBallGame
//setup function is called once when program begins

class Button {
  constructor(x, y, msg) {
    this.loc = createVector(x, y);
    this.msg = msg;
    this.clr = color(20, 100, 130);
  }//determining parts of buttons


run(){
  this.render();
}
render() {
  fill(this.clr);
  rect(this.loc.x, 600, 80, 80); // square shaped button
  fill(20, 100, 130);
  textSize(25);
  text(this.msg, this.loc.x + 10, this.loc.y - 20);
}
}

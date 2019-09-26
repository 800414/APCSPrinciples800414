// Olivia Cordero
//9.16.19
//PaddleBallGame
//setup function is called once when program begins

class Button {
  constructor(x, y, w, h, color, loc) //determining parts of buttons
  this.loc = createVector(x, y);
  this.w = 80;
  this.h = 80;
  this.clr = color(20,100,130);
}
run(){
  this.render();
}
render() {
  fill(this.clr);
  rect(this.loc.x, 600, this.w, this.h); // square shaped button 
}

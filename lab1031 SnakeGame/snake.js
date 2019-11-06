class Snake {
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    //this.clr = random(color(255));
    this.w = w;
    this.h = h;
  }

  run(){  //call upon render and update functions to make snake appear properly
    this.render();
    this.update();
  }

  update(){
    this.keyReleased();
  }

  render(){  //how snake appear on screen
  fill(255,182,193);
  rect (this.loc.x, this.loc.y, this.w, this.h);
  }

keyReleased(){
  if(keyCode === UP_ARROW){
    this.loc.y = this.loc.y - this.h
  }
  if(keyCode === DOWN_ARROW){
    this.loc.y = this.loc.y + this.h
  }
  if(keyCode === LEFT_ARROW){
    this.loc.x = this.loc.x - this.w
  }
  if(keyCode === RIGHT_ARROW){
    this.loc.x = this.loc.x + this.w
  }
}
//checkEdges(){
//  if(this.loc.x > 800 ||
  //  this.loc.x < 0 ||
  //  this.loc.y > 800 ||
  //  this. loc.y < 0){
  //    clear();
  //  }
}

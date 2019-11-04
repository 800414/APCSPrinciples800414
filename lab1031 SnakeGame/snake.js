class Snake {
  constructor(x, y, clr){
    this.loc = createVector(x, y);
    this.clr = random(color(255));
  }
  render(){  //how snake appear on screen
  fill(this.clr);
  rect (this.loc.x, this.loc.y, this.w, this.h);

  }

  run(){  //call upon render and update functions to make snake appear properly
    this.render();
    this.update();
  }

  update(){

  }
keyReleased(){
  if(keyCode === UP_ARROW){
    this.loc.y = this.loc.y - this.h
  }
}
}

class Bar {
  constructor(x, y, w, h, clr){
    this.loc = createVector(x, y);
    this.w = 80;
    this.h = random(0, 800);
    this.clr = color(random(255), random(255), random(255));
  }
  run(){
    this.render();
  //  this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, 800, this.w, this.h); //place bar at bottom of screen
  }
}

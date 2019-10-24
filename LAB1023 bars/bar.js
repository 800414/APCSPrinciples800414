class Bar {
  constructor(location){
    this.loc = location;
    this.w = barWidth;
    this.h = height - this.loc.y;
    this.clr = color(random(255), random(255), random(255));
  }
  run(){
    this.render();
  //  this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}

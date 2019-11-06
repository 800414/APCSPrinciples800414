class Food {
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = 15;
    this.h = 15;
  }
  run(){
    this.update();
    this.render();
  }
  update(){

  }
  render(){
    fill(66, 230, 245);
    rect (this.loc.x, this.loc.y, this.w, this.h);
  }
}

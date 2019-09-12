class Paddle {
  constructor(x, y, w, h){
   this.loc = createVector(x, y);
   this.loc2 = createVector(w, h);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.render();
  }

//  checkedges(){
  //  if(this.loc.x < 0){
//this.loc.x = width;
  //  }
  //  if(this.loc.x > width){
  //    this.loc.x = 0
  //  }
//    if(this.loc.y < 0){
//      this.loc.y = height
  //  }
  //  if(this.loc.y > height){
    //  this.loc.y = 0
    render(){
      fill(this.clr);
      rect(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
    }
    }

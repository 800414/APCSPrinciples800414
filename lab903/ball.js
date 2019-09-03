
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0, 1);
    this.clr = color(random(255), random(255), random(255));
    //this.width = random(10,80);

  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > height){
      this.vel.y = -this.vel.y;
      this.loc.y = height-2;
    }
  }

  update(){
    //this.clr = color(random(255), random(255), random(255));
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 11, 11);
    //fill(this.clr);
    //rect(this.x, this.y, this.width, this.width);
  }
}// end ball class

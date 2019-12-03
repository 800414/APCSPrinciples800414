class Ship {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.id = id;
  // this.angle = 0;
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
    this.checkedges();
  }

    update(){
      this.vel.add(this.acc);
      this.vel.limit(10);
      this.loc.add(this.vel);
    //  this.loc.heading();
    var distToMainBall;
    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall.loc);
   }
     if(distToMainBall < 700){
       //add attraction
       this.acc = p5.Vector.sub(mainBall.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(0.5);
     }
    }

    render(){
      fill(this.clr);
      this.angle = this.acc.heading() + PI/2;
      push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      triangle(-5, 8, 5, 8, 0, -8);
      pop();
    }
    checkedges(){
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;
      //  this.loc.x = 800;
      }
      if(this.loc.x > width){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y < 0){
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y;
        //this.loc.y = height -2;
      }
  }
}

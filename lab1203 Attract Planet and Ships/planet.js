class Planet {
  constructor(x, y, dx, dy, id){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
   this.id = id;

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
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
  update(){
    var distToMainBall;
    if(this.id > 2){
     distToMainBall = this.loc.dist(mainBall.loc);
}
 if(distToMainBall <= 100){
   this.loc.x = random(100,700);
   this.loc.y = random(100,700);
   this.render();
}
       //add attraction
     this.acc = p5.Vector.sub(mainBall.loc, this.loc);
     this.acc.normalize();
      this.acc.mult(0.5);
    this.vel.limit(6);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  render(){
    fill(this.clr);
    if (this.id < 3 ){
      ellipse (this.loc.x, this.loc.y, 40, 40);
    }
  }
}
//  +++++++++++++++++++++++++++++++++++  End Ball Class

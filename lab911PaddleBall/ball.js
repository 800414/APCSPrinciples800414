class Ball {
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));

  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    var paddle;
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
    }
      //this.loc.y = height -2;
    }
    update(){
         this.vel.add(this.acc);
         this.loc.add(this.vel);
       }
    render(){
         fill(this.clr);
         ellipse(this.loc.x, this.loc.y, 20, 20);
       }
  }



//  +++++++++++++++++++++++++++++++++++  End Ball Class

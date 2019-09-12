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
    this.isColliding();
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
    }
      //this.loc.y = height -2;
    }
    update(){
         this.vel.limit(10);
         this.vel.add(this.acc);
         this.loc.add(this.vel);
       }
    render(){
        fill(this.clr);
        ellipse(this.loc.x, this.loc.y, 40, 40);
       }
    isColliding() {
      if(this.loc.x > paddle.loc.x &&
         this.loc.x < paddle.loc.x + paddlewidth &&
         this.loc.y > paddle.loc.y &&
         this.loc.y < paddle.loc.y + paddleheight)
         {
           // return true;
           this.vel.y = -this.vel.y
         } else {
           //return false
         }

    }
}


//  +++++++++++++++++++++++++++++++++++  End Ball Class

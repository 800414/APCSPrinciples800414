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
      if(this.loc.x + 20 > paddle.loc.x &&
         this.loc.x - 20 < paddle.loc.x + paddle.w &&
         this.loc.y + 20 > paddle.loc.y &&
         this.loc.y - 20 < paddle.loc.y + paddle.h) //bounce off paddle
         {
           score++;
           this.vel.y = -this.vel.y;
           this.clr = color(random(255), random(255), random(255));
         } else {
           this.vel.y = this.vel.y;
        if(this.loc.x + 20 < paddle.loc.x &&
           this.loc.x - 20 > paddle.loc.x + paddle.w &&
           this.loc.y + 20 < paddle.loc.y &&
           this.loc.y - 20 > paddle.loc.y + paddle.h)
            this.vel.y = -this.vel.y;
        if(this.loc.y >= 800){
          gameState = 3
        }


           //return false
         }

    }
}


//  +++++++++++++++++++++++++++++++++++  End Ball Class

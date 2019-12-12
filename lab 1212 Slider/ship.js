class Ship {
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.angle = 0;
   this.acc = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
    this.checkedges();
  }

    update(){
     var distToPlanet;
     distToPlanet = this.loc.dist(planet.loc); //distance to planet
       //add attraction
       this.acc = p5.Vector.sub(planet.loc, this.loc);
       this.acc.normalize();
       this.acc.mult(sliderAttraction.value()/10);  //slider controls attraction

       this.vel.limit(sliderVelocity.value());  //slider controls velocity
       this.vel.add(this.acc);
       this.loc.add(this.vel);

       if(distToPlanet < 100){
         planet.loc.x = random(100,700);
         planet.loc.y = random(100,700);
       }
    }

    render(){
      fill(this.clr);
      this.angle = this.acc.heading() + PI/2;  //ships rotate toawrd planet
      push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      triangle(-5, 8, 5, 8, 0, -8);  //ship size
      pop();
    }
    checkedges(){  //bounce off edges
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

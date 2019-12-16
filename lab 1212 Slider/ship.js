class Ship {
  constructor(x, y, dx, dy){
   this.loc = createVector(x, y);
   this.vel = createVector(dx, dy);
   this.angle = 0;
   this.acc1 = createVector(0,0);  //for each indiv planet
   this.acc2 = createVector(0,0);
   this.acc3 = createVector(0,0);
   this.acc4 = createVector(0,0);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.update();
    this.render();
    this.checkedges();
  }

    update(){
     var distToPlanet1, distToPlanet2, distToPlanet3, distToPlanet4;
     distToPlanet1 = this.loc.dist(planets[0].loc); //distance to planet
     distToPlanet2 = this.loc.dist(planets[1].loc);
     distToPlanet3 = this.loc.dist(planets[2].loc);
     distToPlanet4 = this.loc.dist(planets[3].loc);

     if(distToPlanet1 < distToPlanet2 && distToPlanet3 && distToPlanet4){
       this.acc1 = p5.Vector.sub(planets[0].loc, this.loc);
       this.acc1.normalize();
       this.acc1.mult(0.5);  // attraction
       this.angle = this.acc1.heading() + PI/2;
       this.vel.limit(6);  // velocity
       this.vel.add(this.acc1);
       this.loc.add(this.vel);
     }
     if(distToPlanet2 < distToPlanet1 && distToPlanet3 && distToPlanet4){
       this.acc2 = p5.Vector.sub(planets[1].loc, this.loc);
       this.acc2.normalize();
       this.acc2.mult(0.5);  //attraction
       this.angle = this.acc2.heading() + PI/2;
       this.vel.limit(6);  //velocity
       this.vel.add(this.acc1);
       this.loc.add(this.vel);
     }
     if(distToPlanet3 < distToPlanet2 && distToPlanet1 && distToPlanet4){
       this.acc3 = p5.Vector.sub(planets[2].loc, this.loc);
       this.acc3.normalize();
       this.acc3.mult(0.5);  //slider controls attraction
       this.angle = this.acc3.heading() + PI/2;
       this.vel.limit(6);  //slider controls velocity
       this.vel.add(this.acc1);
       this.loc.add(this.vel);
}
if(distToPlanet4 < distToPlanet2 && distToPlanet3 && distToPlanet1){
  this.acc4 = p5.Vector.sub(planets[3].loc, this.loc);
  this.acc4.normalize();
  this.acc4.mult(0.5);  //attraction
  this.angle = this.acc4.heading() + PI/2;
  this.vel.limit(6);  // velocity
  this.vel.add(this.acc1);
  this.loc.add(this.vel);
}
if (distToPlanet1 < 100){
  planets[0].loc.x = random(100,700);
  planets[0].loc.y = random(100,700);
}
if (distToPlanet2 < 100){
  planets[1].loc.x = random(100,700);
  planets[1].loc.y = random(100,700);
}
if (distToPlanet3 < 100){
  planets[2].loc.x = random(100,700);
  planets[2].loc.y = random(100,700);
}
if (distToPlanet4 < 100){
  planets[3].loc.x = random(100,700);
  planets[3].loc.y = random(100,700);
}
}
      // if(distToPlanet < 100){
      //   planets[i].loc.x = random(100,700);
      //   planets[i].loc.y = random(100,700);


    render(){
      fill(this.clr);
        //ships rotate toawrd planet
      push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      triangle(-5, 8, 5, 8, 0, -8);  //ship size
      pop();
    }
     checkedges(){  //bounce off edges
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

       }
  }
}

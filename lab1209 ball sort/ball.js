//Olivia Cordero
//9/11/19
//PaddleBall GAME
//setup function is called upon once when program begins

class Ball {
  constructor(x, y, clr, red){  //defining aspects of ball
   this.loc = createVector(x, y);
   this.clr = clr;
   this.shade = red;
  }

  run(){
    this.render();
  }

    render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 30, 30);  //ball appearances
    }
    set(i){
      this.loc.x = 100 + 30*i;
    }
}






//  +++++++++++++++++++++++++++++++++++  End Ball Class

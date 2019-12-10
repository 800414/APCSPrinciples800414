//Olivia Cordero
//12/09/19
//ball sort
//setup function is called upon once when program begins

class Ball {
  constructor(x, y, clr, red){  //defining aspects of ball
   this.loc = createVector(x, y);
   this.clr = clr;
   this.shade = red;
  }

  run(){  //make balls appear on screen
    this.render();
  }

    render(){
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 30, 30);  //ball appearances
    }
    set(i){ //setting ball at certain x values
      this.loc.x = 100 + 30*i;
    }
}






//  +++++++++++++++++++++++++++++++++++  End Ball Class

// Olivia Cordero
//9/11 PaddleBall
// CollisionDetection
// The setup function is called once when your program begins

class Paddle {
  constructor(x, y, w, h){
   this.loc = createVector(x, y);
   this.loc2 = createVector(w, h);
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.render();
    this.update();
  }
  render() {
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.loc2.x, this.loc2.y);
  }
  update() {
    var MouseLoc = createVector(mouseX, 750);
    this.loc = p5.Vector.lerp(this.loc, MouseLoc, 0.09);

  }
 }

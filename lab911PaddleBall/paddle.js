// Olivia Cordero
//9/11 PaddleBall
// CollisionDetection
// The setup function is called once when your program begins
var paddle1x, paddle1y, paddle1w, paddle1h;

class Paddle {
  constructor(x, y, w, h){
   this.loc = createVector(x, y);
   this.w = 200;
   this.h = 50;
   this.clr = color(random(255), random(255), random(255));
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }

 checkEdges(){
 }
update(){
  var MouseLoc = createVector(mouseX, 700);
  this.loc = p5.Vector.lerp(this.loc, MouseLoc, .9);
  if(this.loc.y < 400){
    paddle1x = this.loc.x;
    paddle1y = this.loc.y;
    paddle1w = this.w;
    paddle1h = this.h;
  }
}
    }

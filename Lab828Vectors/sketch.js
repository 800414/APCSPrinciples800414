//  Olivia Cordero
// 	Aug. 28
//  Vectors
//  The setup function function is called once when your program begins
var balls = []
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
    //b1 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  // b2 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
   //b3 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  //b4 = new Ball(random(width), random(height), random(-5,5), random(-5,5));
  loadBalls(280);


 }

 //  The draw function is called @ 30 fps
 function draw() {
   background(5, 5, 5);
  // b1.run();
   //b2.run();
  // b3.run();
   //b4.run();
   runBalls();
   }
   function loadBalls(n){
     for(var i = 0; i < n; i++){
       balls[i] = new Ball(random(width), random(height), random(-5,5), random(-5,5));
     }
   }
function runBalls(){
  for(var i = 0; i< balls.length; i++){
    balls[i].run();
  }
}

//  Olivia Cordero
// Sept 03
//  attraction
//  The setup function function is called once when your program begins

var Balls = []; //declares array
var paddle1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background(5, 5, 5, 10);
}

loadBalls(1);

function draw() {
background(5,5,5,20);

  runBalls();
}

function loadObjects(x){
  paddle1 = new Paddle(350, 50, 100, 25);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(400, 400, random (-8,8), random(-8,8));
  }
}

function runBalls(){
  paddle1.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
}
}

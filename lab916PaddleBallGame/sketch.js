//  Olivia Cordero
// Sept 03
//  attraction
//  The setup function function is called once when your program begins


var paddle;
var balls = []
var score = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 10);
  loadObjects(random(0,10)); //array of balls


}

function draw() {
background(5,5,5,20);
  runObjects();
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25);
}


function loadObjects(n) {
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800),random(300), random(0, 5), random(0, 5));
  }
    paddle = new Paddle(250, 700, 300, 50);
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}

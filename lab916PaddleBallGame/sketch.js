//  Olivia Cordero
// Sept 03
//  attraction
//  The setup function function is called once when your program begins


var paddle;
var ball;
var score = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 10);
  drawPaddle();
  loadBall();


}

function draw() {
background(5,5,5,20);
  runPaddle();
  runBall();
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25);
}

function drawPaddle() {
  paddle = new Paddle(100, 400, 300, 50);
}

function loadBall() {
  ball = new Ball(random(0, 800), 0, 50, 50);
}

function runPaddle(){
  paddle.run();
}

function runBall() {
  ball.run();
}

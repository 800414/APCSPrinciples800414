//  Olivia Cordero
// Sept 03
//  attraction
//  The setup function function is called once when your program begins


var paddle;
var balls = []
var score = 0;
var gameState = 2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 10);
  loadObjects(random(0,10)); //array of balls


}

function draw() {
background(100,50,100,20);
  //runObjects();
//  fill(0, 255, 255);
//textSize(30);
//text("Score: " + score, 10, 25);
fill(2, 2, 2); //splash screen code
if(gameState === 1){
  startGame();
}else if(gameState === 2){
  playGame();
}else if(gameState === 3){
  endGame();
}
}


function loadObjects(n) {
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(800),random(300), random(0, 5), random(0, 5));
  }
    paddle = new Paddle(250, 700, 300, 50);
}
function startGame(){
  textSize(50);
  text('PADDLEBALL GAME!', 164, 300);
  fill(20, 100, 130);
  textSize(25);
  text('easy', 176, 575);
  rect(170, 600, 60, 60);
  text('medium', 360, 575);
  rect(370, 600, 60, 60);
  text('hard', 578, 575);
  rect(570, 600, 60, 60);
}
function multiGame(){

}
function playGame(){
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25);
runObjects();
}
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
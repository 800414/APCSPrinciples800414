//  Olivia Cordero
// Sept 03
//  attraction
//  The setup function function is called once when your program begins


var paddle;
var balls = []
var score = 0;
var lives = 5;
var gameState = 1;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5, 10);
  loadObjects(random(0,10)); //array of balls


}

function draw() {
background(255,255,255,10);
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
  background(100,50,100);
  fill(46,79,200);
  textSize(50);
  text('PADDLEBALL GAME!', 164, 300);
  fill(46,79,148);
  textSize(20);
  text('Instructions: Click on one of the boxes below to choose game mode.', 120, 350);
  text('As the difficulty level increases, so does the number of balls.', 120, 370);
  text('Try to keep the balls from touching the bottom of the screen.', 120, 390);
  text('When the ball reaches the bottom, the amount of lives will decrease by one.', 120, 410);
  text('If the number of lifes equals zero, game over!', 120, 430);
  fill(20, 100, 130);
  textSize(25);
  text('easy', 176, 575);
  rect(170, 600, 60, 60);
  text('medium', 360, 575);
  rect(370, 600, 60, 60);
  text('hard', 578, 575);
  rect(570, 600, 60, 60);
  if(mouseIsPressed &&
      mouseX > 170 &&
      mouseX < 230 &&
      mouseY > 600 &&
      mouseY < 660){
        loadObjects(random(0,5));
        gameState = 2;
        console.log('easy');
      }
      if(mouseIsPressed &&
        mouseX > 370 &&
        mouseX < 430 &&
        mouseY > 600 &&
        mouseY < 660){
          loadObjects(random(6,10));
          gameState = 2
          console.log('medium');
        }
      if(mouseIsPressed &&
        mouseX > 570 &&
        mouseX < 630 &&
        mouseY > 600 &&
        mouseY < 660){
          gameState = 2;
          loadObjects(random(11,15));
          console.log('hard');
        }
}
function playGame(){
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25);
text("Lives: " + lives, 10, 60);
runObjects();
}
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
function endGame(){
  background(255,50,100,10);
  textSize(50);
  text('OOPS! GAME OVER!', 160, 300);
  textSize(25);
  text('NEW GAME', 154, 575);
  rect(176, 600, 80, 80);
if(mouseIsPressed &&
  mouseX > 176 &&
  mouseX < 256 &&
  mouseY > 600 &&
  mouseY < 680){
    gameState = 1;
    }
  }

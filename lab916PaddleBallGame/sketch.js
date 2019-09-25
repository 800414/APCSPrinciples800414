//  Olivia Cordero
// Sept 03
//  PaddleBall
//  The setup function function is called once when your program begins


var paddle;
var balls = []
var score = 0;
var lives = 10;
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
}else if(gameState === 4){
  winGame();
}else if(gameState === 5){
  quitGame();
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
  text('HIT IT OR QUIT IT!', 176, 300);
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
        loadObjects(random(1,4));
        gameState = 2;
        console.log('easy');
}
    if(mouseIsPressed &&
        mouseX > 370 &&
        mouseX < 430 &&
        mouseY > 600 &&
        mouseY < 660){
          loadObjects(random(5,9));
          gameState = 2
          console.log('medium');
        }
      if(mouseIsPressed &&
        mouseX > 570 &&
        mouseX < 630 &&
        mouseY > 600 &&
        mouseY < 660){
          gameState = 2;
          loadObjects(random(10,13));
          console.log('hard');
        }
      }

function playGame(){
  fill(0, 255, 255);
textSize(30);
text("Score: " + score, 10, 25);
text("Lives: " + lives, 10, 60);
runObjects();
  if(score>= 10){
    gameState = 4;
  }
}
function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++) balls[i].run();
}
function endGame(){ //lose screen
  background(255,50,100,10);
  textSize(50);
  text('OOPS! GAME OVER!', 160, 300);
  textSize(25);
  text('NEW GAME', 154, 575);
  rect(176, 600, 80, 80);
  text('QUIT GAME', 520, 575);
  rect(550, 600, 80, 80);
if(mouseIsPressed && //restart game but skip start screen
  mouseX >= 176 &&
  mouseX <= 256 &&
  mouseY >= 600 &&
  mouseY <= 680){
     paddle;
     balls = [];
     score = 0;
     lives = 10;
     gameState = 1;
    }
if(mouseIsPressed && //quit game
    mouseX >= 550 &&
    mouseX <= 630 &&
    mouseY >= 600 &&
    mouseY <= 680){
      gameState = 5;

    }
  }
  function winGame(){ //win screen
    background(200,30,89,10);
    textSize(50);
    text('CONGRATULATIONS!', 160, 300);
    text('YOU WIN!', 300,350);
    textSize(25);
    text('NEW GAME', 154, 575);
    rect(176, 600, 80, 80);
    text('QUIT GAME', 520, 575);
    rect(550, 600, 80, 80);
    if(mouseIsPressed && //restart game skipping start screen
      mouseX >= 176 &&
      mouseX <= 256 &&
      mouseY >= 600 &&
      mouseY <= 680){
         paddle;
         balls = [];
         score = 0;
         lives = 10;
         gameState = 1;
        }
      if(mouseIsPressed && //quit game
          mouseX >= 550 &&
          mouseX <= 630 &&
          mouseY >= 600 &&
          mouseY <= 680){
            gameState = 5;
  }
}
function quitGame(){
  background(200,40,98,0);
  textSize(50);
  text('BYE!', 300, 300);
  text('HOPE YOU ENJOYED!:)', 150, 360);
}

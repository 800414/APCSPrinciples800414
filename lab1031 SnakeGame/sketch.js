//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var gameState = 1;
var startButton;
var playAgainButton;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(140, 40, 200);
  frameRate(10);
  loadObjects(1);
  createButtons();
}

//  The draw function is called @ 30 fps
function draw() {
  background(100,80,200);
    snake.run();
    food.run();
    if(gameState === 1){
      startGame();
    }else if(gameState === 2){
      playGame();
    }else if(gameState === 3){
      endGame();
    }

}

function createButtons(){  //making buttons with different functions
  startButton = new Button(370, 600, 'START GAME!');
  playAgainButton = new Button(370,500, 'PLAY AGAIN!');
}

function loadObjects(n){
    snake = new Snake (400,400,20,20);
    food = new Food(random(70,700), random(50,400), this.w, this.h);
}

function startGame(){ //starting splash screen
  clear();
  background(100,80,200);
  fill(5,5,5);
  textSize(50);
  text('SNAKE GAME', 240, 300);  //game title
  fill(5,5,5);
  textSize(20);
  text('Instructions: Use the arrow keys to move the snake around the screen.', 120, 350);
  text('Try to eat the food, and your snake will grow!', 120, 370);
  startButton.run();
  if(mouseIsPressed &&  //button pressed, load medium mode
      mouseX > 370 &&
      mouseX < 430 &&
      mouseY > 600 &&
      mouseY < 660){
        loadObjects();
        gameState = 2;
}
}
function checkTangled(){
  if(snake.tangled() === true){
    gameState = 3;
}
}

function playGame(){
  snake.run();
  food.run();
  checkTangled();
  }

function endGame(){
  clear(); //lose screen
  background(255,50,100,10);
  textSize(50);
  text('OOPS! GAME OVER!', 160, 300);
  playAgainButton.run();
  if(mouseIsPressed &&  //button pressed, load medium mode
      mouseX > 370 &&
      mouseX < 430 &&
      mouseY > 500 &&
      mouseY < 560){
        var snake;
        var food;
        gameState = 1;
      }
    }

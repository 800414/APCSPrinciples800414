//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var x = 0;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(140, 40, 200);
  frameRate(10);
  loadObjects(1);

}

//  The draw function is called @ 30 fps
function draw() {
  background(100,80,200);
    snake.run();
    food.run();
}

function loadObjects(n){
    snake = new Snake (400,400,20,20);
    food = new Food(random(70,700), random(50,400), this.w, this.h);
}

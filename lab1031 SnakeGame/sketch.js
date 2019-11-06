//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var snake = [];
var food;
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
  for(var i = 0; i<1; i++){
    snake[i].run();
  }
  food.run();
}

function loadObjects(n){
  for(var i = 0; i<n; i++){
    snake[i] = new Snake (400,400,20,20);
    }
  for(var i = 0; i < n; i++){
    food = new Food(random(70,700), random(50,400), this.w, this.h);
  }
}

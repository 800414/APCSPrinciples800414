//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x;
var y;
var speedX;
var speedY;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x= 40;
  y= 400;
  speedX= random(-2, 7);
  speedY= random(-3, 8);


}

//  The draw function is called @ 30 fps
function draw() {
  if(x<0){
    speedX= -speedX;
  }
  x= x+speedX;
  y=y+speedY;
  fill(50, 20, 67);
ellipse(x,100,80,80);
fill(20, 67, 50);
ellipse(x,670,80,80);
}

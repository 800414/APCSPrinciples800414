//  Olivia Cordero
// 	oct 30
//  bar sort
//  The setup function function is called once when your program begins
var balls=[];  //defining global variables

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(155);
  fill(200, 30, 150);
  loadBalls(20);
  frameRate(4);  //show animation of each step of sorting bars
  for (var i = 0; i<balls.length; i++){
  balls[i].render();
}
}

function draw() {
  bubbleSort();  //run sorthing method of bubble
}

function loadBalls(num){
  for (var i = 0; i < num; i++){ //appearance of bars
    var xposition = 100 + 30*i;
    var red  = random(0, 255);
    balls[i] = new Ball (xposition, 400, color(red, 0, 0), red);
}
}
function  update(){
  for(var i=0; i < balls.length; i++){  //displaying original unsorted bars
    balls[i].set();
  }
  background(155); //reset background and make sorted bars appear
  for(var i=0; i < balls.length; i++){
    balls[i].run();
  }
}
function bubbleSort(){  //sort bars by comparing pairs
  for (var x=0; x<balls.length-1;x++){
    if(balls[x].shade > balls[x+1].shade){
      swap(balls,x,x+1);  ///swap
      update();
    }
  }
}
function swap(list,a,b){  //swapping function
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}

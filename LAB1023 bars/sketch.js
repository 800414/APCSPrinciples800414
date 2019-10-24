//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars = [];
var numBars
var barWidth;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  barWidth = 40;
  numBars = width/barWidth;

  loadBars(numBars);
  runBars();

}

//  The draw function is called @ 30 fps
function draw() {
  background(20,10,100)
frameRate(1);
runBars();
}
function loadBars(num){
  for(var i = 0; i < num; i++){
    var barHeight = Math.floor(random(height));
    var loc = createVector(i*barWidth, barHeight);
    bars[i] = new Bar(loc);
  }
  }
function runBars(){
  for(var i = 0; i < bars.length; i++){
    bars[i].render();
  }
}
function selectionSort(){
for (var i = 0; i < bars.length - 1; i++){
    var index = i;
    for (var j = i + 1; j < bars.length; j++){
if (bars[j] < bars[index]){
index = j;
    //  Swapping Code
    var smallerBar = bars[index];
    bars[index] = bars[i];
    bars[i] = smallerBar;
    loadBars();
    runBars();
  }
  }
}
}

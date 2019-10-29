//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[];
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  fill(200, 30, 150);
  loadBars();
  frameRate(4);
  for (var i = 0; i<bars.length; i++){
  bars[i].render();
}
}

function draw() {
  bubbleSort();
}

function loadBars(){

  for (var i = 0; i< 40; i++){
    barWidth = (width/20);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
}

function  update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
    }
    background(255);
    for(var i=0; i<bars.length; i++){
      bars[i].run();
    }
}
function bubbleSort(){
  for (var x=0; x<bars.length-1;x++){
    if(bars[x].getHeight()>bars[x+1].getHeight()){
      swap(bars,x,x+1);
      update();
    }
  }
}
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}

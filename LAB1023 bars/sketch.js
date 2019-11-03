//  Olivia Cordero
// 	oct 30
//  bar sort
//  The setup function function is called once when your program begins
var bars=[];  //defining global variables
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  fill(200, 30, 150);
  loadBars();
  frameRate(4);  //show animation of each step of sorting bars
  for (var i = 0; i<bars.length; i++){
  bars[i].render();
}
}

function draw() {
  bubbleSort();  //run sorthing method of bubble
}

function loadBars(){  //appearance of bars

  for (var i = 0; i< 40; i++){
    barWidth = (width/32);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
}
function  update(){
  for(var i=0; i<bars.length; i++){  //displaying original unsorted bars
    bars[i].set(i);
    }
    background(255); //reset background and make sorted bars appear
    for(var i=0; i<bars.length; i++){
      bars[i].run();
    }
}
function bubbleSort(){  //sort bars by comparing pairs
  for (var x=0; x<bars.length-1;x++){
    if(bars[x].getHeight()>bars[x+1].getHeight()){
      swap(bars,x,x+1);  ///swap
      update();
    }
  }
}
function swap(list,a,b){  //swapping function
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}

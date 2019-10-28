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
}

function draw() {
  frameRate(4);
  for (var i = 0; i<bars.length; i++){
    bars[i].render();
  }
selectionSort(bars);
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
}

function selectionSort(bar){
  for(var i = 0; i < bar.length-1; i ++){ //moves end limit
      var smallerBar = i;
  for (var j = i+1 ; j < bar.length ; j++){
      if(bar[j].getHeight() < bar[smallerBar].getHeight()){
          smallerBar = j;

          }
        }
        swap(bar, i , smallerBar);
        update();
      }

  }

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[] ;
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(10, 5, 10);
  fill(200, 30, 150);

loadBars();
}

function draw() {
  frameRate(20);
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

function selectionSort(arr){
  for(var i = 0; i < arr.length-1; i ++){ //moves end limit
      var small = i;
  for (var j = i+1 ; j < arr.length ; j++){
      if(arr[j].getHeight() < arr[small].getHeight()){
          small = j;
          }
        }
        swap(arr, i , small);
        update();
      }

  }

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

//  Olivia Cordero
// 	10/17
//  insertion sort
//  The setup function function is called once when your program begins
var list = [];
var temp;
function loadList(n){
  for(var i = 0; i < n; i++){// array until i < n
    list.push(random(0, 10000)));//rand number from 0-10000
}


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(10000);
  console.log(list);
  for(var i = 1; i < list.length; i++){
    for(var j = list.length; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
  console.log(list);
  var evenorodd = list.length % 2;
  var halfofevenlength = 0.5 * list.length;
  var halfofoddlength = (0.5 * list.length) - 0.5;
  //console.log(halflengthodd);
  var median = 0;
  if(evenorodd === 0){
    median = (list[halfofevenlength] + list[halfofevenlength - 1])/2
    console.log('median: ' + median);
  }else{
    median = list[halfofoddlength];
    console.log('median: ' + median)
  }
}



function swap(list, a, b) {//swaps two variables
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}
console.log(list);


//  The draw function is called @ 30 fps
//function draw() {
////
//}
//  The draw function is called @ 30 fps
function draw() {

}

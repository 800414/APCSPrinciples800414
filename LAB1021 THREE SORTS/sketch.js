//  OLIVIA CORDERO
// 	1021
//  ALL THREE SORTS
//  The setup function function is called once when your program begins
var list = [];
var temp;
var bswaps = 0;
var bcompares = 0;
var iswaps = 0;
var icompares = 0;
var sswaps = 0;
var scompares = 0;

function loadList(n){
  for(var i = 0; i < n; i++){//keeps adding numbers onto the array until i < n, the number of items in the array
    list.push(int(random(0, 10000)));//pushes a random integer between 0 and 1000 into the array
  }
}//function generates a random array with as many numbers as the input is

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(1000); //list of integers
  console.log(list);
  bubbleSort(); //run bubble sort
  console.log(list); //display sorted list
  list = [];  //reset and load new list
  loadList(1000);
  console.log(list); //show unsorted list
  insertionSort();  //sort list through insertion method
  console.log(list);  //show sorted list in console
  list = [];  //reset and load new list
  loadList(1000);
  console.log(list);  //unsorted list shown in console
  selectionSort();  //sort by selection
  console.log(list);  //show newly shorted list


}

//  The draw function is called @ 30 fps
function draw() {

}

function swap(list, a, b) {//swapping two variables
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

function selectionSort() {
  var t1 = millis(); //begin time at start of sorting
  for(var i = 0; i < list.length - 1; i++){
  var index = i;
  for(var j = i + 1; j < list.length; j++){
    scompares++; //number of compares within sort method
    if(list[j] < list[index]){
      index = j;
    }
  }
  swap(list, index, i);
  sswaps++;  //number of swaps within sort method
  var t2 = millis(); //time elapsed after sorting is completed
  }
  console.log('selection sort compares: ' + scompares); //record on console
  console.log('selection sort swaps: ' + sswaps); //record on console
  console.log('selection sort time: ' + [t2-t1]/[1000]); //time elapsed in seconds
}

function insertionSort() {
  var t1 = millis();
  for(var i = 1; i < list.length; i++){
    for(var j = i; j > 0; j--){
      icompares++;  //compare integers
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1); //swap occurs
        iswaps++;
        var t2 = millis();
      }
    }
  }
  console.log('insertion sort compares: ' + icompares);  //recording data in console
  console.log('insertion sort swaps: ' + iswaps);
  console.log('insertion sort time:' + [t2-t1]/[1000]); //time elapsed within sort in seconds
}

function bubbleSort() {  //begin bubble sort
  var t1 = millis();
  for (var i = list.length - 1; i > 0; i--){
   for (var j = 0; j < i; j++){
    bcompares++;  //compare two numbers that are next to each other
     if (list[j] > list[j+1]) {
       swap(list, j, j+1)  //swap if greater number is to the left of smaller
       bswaps++;  //record swap
       var t2 = millis();
     }
   }
 }
 console.log('bubble sort compares: ' + bcompares);  //data put into console
 console.log('bubble sort swaps: ' + bswaps);
 console.log('bubble sort time: ' + [t2-t1]/1000); //time elapsed within sort recorded in secondsSSS
}

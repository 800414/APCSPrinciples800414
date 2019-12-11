//  Olivia Cordero
// 	12/11
//  insertion sort with numbers
//  The setup function function is called once when your program begins
var list = [];
var temp;
function loadList(n){
  for(var i = 0; i < n; i++){// array until i < n
    list.push(int(random(0, 100)));//random number from 0-100
}
}


function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadList(11);  //list of eleven numbers in console
  console.log(list); //display unsorted list in console
  for(var i = 1; i < list.length; i++){  //begin insertion sort
    for(var j = i; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j - 1);
      }
    }
  }
  console.log(list);  //display sorted list
  var evenorodd = list.length % 2; //determine even vs odd numbers using modular division
  var halfofevenlength = 0.5 * list.length;
  var halfofoddlength = (0.5 * list.length) - 0.5;
  var median = 0;
  if(evenorodd === 0){
    median = (list[halfofevenlength] + list[halfofevenlength - 1])/2  //finding median of list
    console.log('median: ' + median);  //show median in console, even numbers
  }else{
    median = list[halfofoddlength];  //median, odd numbers
    console.log('median: ' + median)
  }
  var sum = 0; //determining the average of the list
  for(var i = 0; i < list.length; i++){
     var sum = sum + list[i];  //sum of all numbers in list
  }
  var average = sum/list.length;  //divide sum of numbers by length of the list to find mean
  console.log('average:' + average);  //display average in console
}
function swap(list, a, b) {  //swapping code for sorting method
  var temp = list[a];
  list[a] = list[b];
  list[b] = temp;
}

//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
var list = [6, 3, 9, 1, 7];
function swap(list,a,b){
  var temp=list[a];
  list[a]=list[b];
  list[b]=temp;
}
for(var i=0; i<list.length; i++){
  for (var x=0; x<list.length;x++){
    if(list[x]>list[x+1]){
      swap(list,x,x+1);
    }
  }
}
console.log(list);
}

//  The draw function is called @ 30 fps

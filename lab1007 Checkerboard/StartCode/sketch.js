/*
**Lab 1007 Ball
**Checker Board
**
*/


//  Global variables
var squares = [] ; // declare b1 as a global variable


// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball
  }
function draw(){
  runSquares();
}


function loadSquares(){
  for (var i=0;i<squares.length;i++){
    if(i%2 === 0 && j%2 === 0){
      squares[i][j] = new Square (100*(i+1), 100*i, color(250,0,0));
    }else if (i%2 === 0 && j%2 === 1){
        squares[i][j]=  new Square (100*(i+1), 100*i, color(0, 0 , 250));
      } else if ( i %2 === 1 && j%2 === 0 ){
        squares[i][j]=  new Square (100*(i+1), 100*i, color(250, 0 , 0));
      }else if (i%2 === 1 && j%2 === 1){
        squares[i][j]=  new Square (100*(i+1), 100*i, color(0, 0 , 250));
       }
       runSquares();
}

}

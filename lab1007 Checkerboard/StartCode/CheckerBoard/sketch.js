/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables
// Declare squares[] as a global variable
var squares=[];

// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  // Create a function that loads the squares into an
  // array of square objects and call the function
  for(var i=0; i<squares.length;i++){
    squares[i].render();
    }
  }

  function loadSquares() {
  for(var i=0;i<8;i++){
    for(var j=0;j<8;j++){
      if(i%2===0){
        if(j%2===0){
          this.clr=color(255,0,0);
      }
      if(j%2!==0){
        this.clr = color(0,255,0);
      }
    }
    if(i%2!==0){
          if(j%2!==0){
            this.clr=color(255,0,0);
          }
          if(j%2===0){
            this.clr=color(0,255,0);
          }
        }
        squares[j+(8*i)]= new Square(100*j,100*i,100,100, this.clr);
    //  create a square object and push it into the squares array

    //  create a loop that will push 64 squares into an array
    //  calculate the x and y position interms of the loop control variable
    }
  }
}

  //  traverse array and run each square

//Olivia Cordero
//1007 CheckerBoard
/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
class Square{
  constructor(x,y,w,h,c){
    this.loc=createVector(x,y);
    this.w=w;
    this.h=h;
    this.clr= c;
  }
run(){
  //main function in class
  this.render();
  this.update();

}
render(){
  //creates paddle
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h);
}

}

//function Sqr(){
//  Add instance variables to your constructor Function
//What does a square need to know about itself??

  //this.render = function(){

  }

//}
//  End of Square constructor function

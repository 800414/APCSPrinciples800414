//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var bar = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBar(100);

}

//  The draw function is called @ 30 fps
function draw() {

}
function loadBar(n){
    bar = new Bar(random(0, 800), 800, this.w, this.h);
  }

//  Olivia Cordero
// 12/16
//  final
//  The setup function function is called once when your program begins

var ship; //declares array
var planets = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  loadObjects(4);  //twenty ships

}


function draw() {
background(255);  //white background
  runObjects();
}

function loadObjects(x){
  for(var i = 0; i < x; i++){  //create planet and ships
  planets[i] = new Planet(random(width/2), random(height/2), random (-1,1), random(-1,1), 1);
}
    ship=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+3);
}

function runObjects(){  //make objects appear
  ship.run();
  for(var i = 0; i < planets.length; i++){
    planets[i].run();
}
}

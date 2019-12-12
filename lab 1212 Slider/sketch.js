//  Olivia Cordero
// 12/12
//  slider
//  The setup function function is called once when your program begins

var ships = []; //declares array
var planet;
var sliderAttraction, sliderVelocity, sliderText;  //slider variables
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255);
  sliderText = createP('Attraction Slider');  //create slider to change attraction of ships
  sliderText.position(100, 370);
  sliderAttraction = createSlider(0, 100, 200);
  sliderAttraction.position(100,400);
  sliderText = createP('Velocity Slider');  //slider to change velocity of ships
  sliderText.position(100, 420);
  sliderVelocity = createSlider(0,10,100);
  sliderVelocity.position(100,450);
  loadObjects(20);  //twenty ships

}


function draw() {
background(255);  //white background

  runObjects();
}

function loadObjects(x){  //create planet and ships
  planet = new Planet(random(width/2), random(height/2), random (-1,1), random(-1,1), 1);
  for(var i = 0; i < x; i++){
    ships[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+3);
  }
}

function runObjects(){  //make objects appear
  planet.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
}
}

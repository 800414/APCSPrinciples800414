class Bar {

constructor (x, y, w, h, clr){  //determining aspects of bar
this.loc = createVector(x,y)
this.w = w;
this.h = h;
this.clr = random(color(255));
}

render(){  //how bars appear on screen
fill(this.clr);
rect (this.loc.x, this.loc.y, this.w, this.h);

}

run(){  //call upon render and update functions to make bar appear properly
  this.render();
  this.update();
}

update(){

}

getHeight(){
  return this.h;
}
set(i){
  this.loc.x=i*25;

}
}

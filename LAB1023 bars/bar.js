class Bar {

constructor (x, y, w, h, clr){
this.loc = createVector(x,y)
this.w = w;
this.h = h;
this.clr = random(color(255));
}

render(){
fill(this.clr);
rect (this.loc.x, this.loc.y, this.w, this.h);

}

run(){
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

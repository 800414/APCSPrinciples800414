class Snake {
  constructor(x, y, w, h){
    this.head = createVector(x, y);
    //this.clr = random(color(255));
    this.w = w;
    this.h = h;
    this.body = [];
    this.vel = createVector(0, 0);
  }

  loadBody(){
    this.body.push(createVector(this.head.x, this.head.y));
  }

  run(){  //call upon render and update functions to make snake appear properly
    this.renderHead();
    this.update();
    this.checkEdges();
  }

  update(){
    this.keyReleased();
    for(var i = this.body.length - 1; i >= 0; i--){
      //this.body[i].x - this.head.x + 15;
    //  this.body[i].y = this.head.y + 15;
      this.renderBody();
    }
    for (i = this.body.length-1; i>=0; i--){
    if (i >= 1){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
   }  if (i === 0){
      this.body[i].x = this.head.x;
      this.body[i].y = this.head.y;
    }
  }
    this.head.add(this.vel);
  }

  renderHead(){  //how snake appear on screen
  fill(255,182,193);
  rect (this.head.x, this.head.y, this.w, this.h);
  }

  renderBody(){
    for(var i = this.body.length - 1; i >= 0; i--){
      fill(255, 182, 193);
      rect(this.body[i].x, this.body[i].y,this.w, this.h);
    }
  }

keyReleased(){
  if(keyCode === UP_ARROW){
    this.vel.x = 0;
    this.vel.y = -14;
  }
  if(keyCode === DOWN_ARROW){
    this.vel.x = 0;
    this.vel.y = 14;
  }
  if(keyCode === LEFT_ARROW){
    this.vel.x = -14;
    this.vel.y = 0;
  }
  if(keyCode === RIGHT_ARROW){
    this.vel.x = 14;
    this.vel.y = 0;
  }
}
checkEdges(){
//bounce off edges
  if(this.head.x > 800 ||
    this.head.x < 0 ||
    this.head.y > 800 ||
    this.head.y < 0){
      gameState = 3;
    }
  }
}

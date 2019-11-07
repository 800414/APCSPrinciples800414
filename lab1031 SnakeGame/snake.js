class Snake {
  constructor(x, y, w, h){
    this.snake = createVector(x, y);
    //this.clr = random(color(255));
    snake.w = w;
    snake.h = h;
  }

  run(){  //call upon render and update functions to make snake appear properly
    this.render();
    this.update();
  }

  update(){
    this.keyReleased();
  }

  render(){  //how snake appear on screen
  fill(255,182,193);
  rect (this.snake.x, this.snake.y, snake.w, snake.h);
  }

keyReleased(){
  if(keyCode === UP_ARROW){
    this.snake.y = this.snake.y - snake.h
  }
  if(keyCode === DOWN_ARROW){
    this.snake.y = this.snake.y + snake.h
  }
  if(keyCode === LEFT_ARROW){
    this.snake.x = this.snake.x - snake.w
  }
  if(keyCode === RIGHT_ARROW){
    this.snake.x = this.snake.x + snake.w
  }
}
//checkEdges(){
//  if(this.snake.x > 800 ||
  //  this.snake.x < 0 ||
  //  this.snake.y > 800 ||
  //  this. snake.y < 0){
  //    clear();
  //  }
}

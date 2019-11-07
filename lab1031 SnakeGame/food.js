class Food {
  constructor(x, y, w, h){
    this.food = createVector(x, y);
    this.w = 15;
    this.h = 15;
  }
  run(){
    this.update();
    this.render();
  }
  update(){
  //  if(this.food.x > this.snake.x &&
    //   this.food.x  < this.snake.x + snake.w &&
    //   this.food.y > paddle.food.y &&
    //   this.food.y  < paddle.food.y + paddle.h)
    //   {
      //   return true;
      //   this.clr = color(random(255), random(255), random(255));
        //    }
  }
  render(){
    fill(66, 230, 245);
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}

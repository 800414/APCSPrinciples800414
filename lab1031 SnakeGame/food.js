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
    //  if(this.food.x + 20 > snake.snake.x &&
      //   this.food.x - 20 < snake.snake.x + snake.w &&
        // this.food.y + 20 > snake.snake.y &&
        // this.food.y - 20 < snake.snake.y + snake.h) //bounce off paddle
        // {
          // return true;
          // var newfood = new Food(random(100,700), random(100,700));

          // }
          }
  render(){
    fill(66, 230, 245);
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}

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
    if(this.food.x + 15 > snake.x &&
       this.food.x - 15 < snake.x + snake.w &&
       this.food.y + 15 > snake.y &&
       this.food.y - 15 < snake.y + snake.h)
       {
        return true;
        this.clr = color(random(255), random(255), random(255));
        this.food.x = random(100,700);
        this.food.y = random(100, 700);
            }
  }
  render(){
    fill(66, 230, 245);
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}

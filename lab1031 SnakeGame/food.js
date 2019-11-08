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
    if(snake.x === this.food.x &&
        snake.y === this.food.y){
        this.food.x = Math.floor(random(0,79))*30;
        this.food.y = Math.floor(random(0,79))*30;
        this.clr = color(random(255), random(255), random(255));
            }
  }
  render(){
    fill(66, 230, 245);
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}

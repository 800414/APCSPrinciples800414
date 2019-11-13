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
    var i = 0;
     if(snake.head.x + 15 >= this.food.x &&
         snake.head.x - 15 <= this.food.x + this.w &&
         snake.head.y + 15 > this.food.y &&
         snake.head.y - 15 < this.food.y + this.h){
           this.food.x = random(70,700);
           this.food.y = random(70,700);
           this.render();
           snake.body.push(createVector(10,10));
         }
          }
  render(){
    fill(66, 230, 245);
    rect (this.food.x, this.food.y, food.w, food.h);
  }
}

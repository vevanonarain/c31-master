var snake;
var rez = 20;
var food;
var w,h;


function setup() {
  createCanvas(600, 400);
   w = floor(width / rez);
   h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}
function preload(){
  bg=loadImage("image/bg.jpg");
  bg2=loadImage("image/bg2.jpg")
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background(bg);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  if (snake.end()) {
    background(bg2);
    noLoop();
  }

  noStroke();
  fill("green");
  rect(food.x, food.y, 1, 1);
}
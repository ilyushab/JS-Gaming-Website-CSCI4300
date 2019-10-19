var snake;
var scl = 16; //scale

var food;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(0);
  if (snake.death()) {
    textSize(62);
    fill(255);
    textAlign(CENTER);
    textStyle(BOLD);
    stroke(0);
    text('Score: ' + snake.total,200,200);
    noLoop();
    snake.x = 0;
    snake.y = 0;
    snake.total = 1;
  }
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  }

  fill(255, 204, 0);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    //makes it so u can't kill yo'self
    if(snake.yspeed != 1) { 
      snake.dir(0, -1);
    }
  } else if (keyCode === DOWN_ARROW) {
    if(snake.yspeed != -1) {
      snake.dir(0, 1);
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(snake.xspeed != -1) {
      snake.dir(1, 0);
    }
  } else if (keyCode === LEFT_ARROW) {
    if(snake.xspeed != 1) {
      snake.dir(-1, 0);
    }
  } // if-else
  loop();
}
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(200, 200, 50, 50);
  car.velocityX = 3;
  wall = createSprite(1000, 200, 50, 100);
  wall.velocityX = -3;
}

function draw() {
  background(0,0,0);

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  movingRect.velocityY = 5;
  fixedRect.velocityY = -5;
  //bounceOff (movingRect, fixedRect);
  bounceOff(car, wall);

  drawSprites();
}
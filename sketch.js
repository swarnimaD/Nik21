var MR, FR;


function setup() {
  createCanvas(1200,800);
  FR =  createSprite(600, 400, 50, 80);
  FR.shapeColor = "green";

  MR = createSprite(400, 200, 80, 30);
  MR.shapeColor = "green";

  car = createSprite(200,200,40,40);
  car.shapeColor = "blue";
  car.velocityX = 3;

  wall = createSprite(1000,200,20,100);
  wall.shapeColor = "pink";
}

function draw() {
  background(0); 
  MR.x = World.mouseX;
  MR.y = World.mouseY;

  
//if(isTouching(car,wall)) {
//car.shapeColor ="pink";
//car.velocityX = 0;
//wall.velocityX = 1;
//}

if(isTouching(MR, wall)) {
  MR.shapeColor = "red";
  FR.shapeColor = "red";
}
else {
  MR.shapeColor = "green";
  FR.shapeColor = "green";
}

BounceOff(car,wall);
  drawSprites();
}


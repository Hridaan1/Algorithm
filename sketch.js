var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect = createSprite(700,200, 30,60);

  fixedRect.debug = true;
  movingRect.debug = true; 
  
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

  movingRect.velocityX = 2;
  fixedRect.velocityX = -2;
}
                   
function draw() {
  background(255,255,255);  
  //movingRect.x = mouseX;
 // movingRect.y = mouseY;

  if(movingRect.x-fixedRect.x <= movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
    movingRect.velocityX=movingRect.velocityX *(-1)
    fixedRect.velocityX=fixedRect.velocityX *(-1)
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}                                                                                                    
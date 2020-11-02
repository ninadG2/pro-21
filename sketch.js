var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  wall = createSprite(400, 200, thickness, height/2);
  wall.shapeColor = color (255);
  bullet = createSprite(100, 200, 40, 10); 
  bullet.shapeColor = color (255);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  drawSprites();

  
  if(hasCollided(bullet,wall))
  {
    bullet.x = wall.x - ((wall.width/2 + bullet.width/2))
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }else if(damage<10)
     {
      wall.shapeColor = color(0,255,0);
     }
  }


  hasCollided(bullet,wall);
}

function hasCollided(lBullet,lWall)
{
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
   return true;
  }
  return false;
}

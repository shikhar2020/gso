var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
  bullet = createSprite(20,80,300,50);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {
  background(255,255,255);  

  if(wall.x - bullet.x <(bullet.width + bullet.width)/2) {
           bullet.velocityX = 0;
           var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
           if (damage > 10) {
             wall.shapeColor
 = color("red");
           }

 if (damge <10) {
     bullet.shapeColor = color("green");

    
  }

 
  }

 



  
  drawSprites();
}
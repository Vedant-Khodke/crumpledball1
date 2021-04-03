
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
	lowerarm = new Box(width/2 + 250, 650, 200, 20, 180);
	 leftarm = new Box(width/2 + 160, 610, 20, 100, 0)
	 rightarm = new Box(width/2 + 350, 610, 20, 100, 0)

	 ball = Bodies.circle(100 , 640 , 20);
	World.add(world, ball);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  lowerarm.display();
  leftarm.display();
  rightarm.display();
  rect(ground.position.x, ground.position.y + 10, width + 10, 10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  console.log(ball.position);
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.applyForce(ball, ball.position, {x:0.06, y:-0.06});
	   
	 }
   }


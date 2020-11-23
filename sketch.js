
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var b1,b2,b3,b4,b5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    

	b1=new Bob(370,400);
	b2=new Bob(390,400);
	b3=new Bob(410,400);
	b4=new Bob(430,400);
	b5=new Bob(450,400);
	platform=new Platform(390,200,200,10)
    r1=new Chain(b1.body,{x:370,y:200});
    r2=new Chain(b2.body,{x:390,y:200});
    r3=new Chain(b3.body,{x:410,y:200});
    r4=new Chain(b4.body,{x:430,y:200});
    r5=new Chain(b5.body,{x:450,y:200});
	Engine.run(Engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  platform.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-5,y:-4});
  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(b5.body,b5.body.position,{x:5,y:4});
  }
}


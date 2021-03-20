
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bb1,roof1,chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bb1 = new Bob(100,500,PI/2);
	bb2 = new Bob(140,500,PI/2);
	bb3 = new Bob(180,500,PI/2);
	bb4 = new Bob(220,500,PI/2);
	bb5 = new Bob(260,500,PI/2);

	roof1 = new roof(100,200,20,190);
	

	chain = new Chain(bb1.body,roof1.body,-bbDiameter*2,0);
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  bb1.display();
  bb2.display();
  bb3.display();
  bb4.display();
  bb5.display();

  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();

  
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo
var bloco3
var bloco2
var bloco1
blocosprop
var soloprop
function preload()
{
   	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
    blocosprop = {
		isStatic: false,
		restitution: 0.9,
		frictionAir: 0.01,
		friction: 0.07,
	}
	soloprop = {
		isStatic: true
	}
	//Crie os Corpos Aqui.
     solo = Bodies.rectangle(windowWidth/2, windowHeight - 5 , windowWidth, 10, soloprop)
       World.add (world, solo)
	Engine.run(engine);

	bloco1 = Bodies.rectangle(100, 600, 40, 40, blocosprop)
    World.add(world, bloco1)
	bloco2 = Bodies.circle(222, 444, 33, blocosprop)
    World.add(world, bloco2)
	bloco3 = Bodies.rectangle(444, 600, 60, 20, blocosprop)
    World.add(world, bloco3)
ellipseMode(RADIUS)
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(solo.position.x, solo.position.y,windowWidth, 5 )
  ellipse(bloco2.position.x, bloco2.position.y, 33 )
  rect(bloco1.position.x, bloco1.position.y,40,40 )
  rect(bloco3.position.x, bloco3.position.y,60,20 )
}




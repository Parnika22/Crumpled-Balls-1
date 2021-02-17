
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;


	ball = new Ball (200,200,21);
	
	
	side1 = new Dustbin (865,610,20,100);
	side2 = new Dustbin (975,650,200,20);
	side3 = new Dustbin (1080,610,20,100);
	

	ground = new Ground (width/2,670,1400,15);  
}


function draw() {
	background(0);
	Engine.update(engine)
	rectMode(CENTER);

	ball.display();

	side1.display();
	side2.display();
	side3.display();

	ground.display();



}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y :-85})
	}
}




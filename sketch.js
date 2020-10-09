const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var stone;
var rubber; 

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(1100, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options ={
		isStatic: true
	}
	
	boy = Bodies.rectangle(100,440,10,10,options);
	World.add(world,boy);

	ground = new Ground(600,680,1200,20);
	tree = new Tree(800,400,600,600);
	stone = new Stone1(120,520);
	
	mango1 = new Mango(720,250); 
	mango2 = new Mango(750,330);
	mango3 = new Mango(890,240);
	mango4 = new Mango(975,335);
	mango5 = new Mango(910,310);
	mango6 = new Mango(825,280);
	mango7 = new Mango(785,195);
	mango8 = new Mango(645,320);
	mango9 = new Mango(860,350);

	rubber = new Rubber(stone.body,{x:120,y:520});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
  image(boyImg, boy.position.x, boy.position.y)
  
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  rubber.display();
  
  var distance1 = stone.body.position.x - mango1.body.position.x
  if(distance1>15) {
    Matter.Body.setStatic(mango1.body, false);
  }

  var distance2 = stone.body.position.x - mango2.body.position.x
  if(distance2>15) {
    Matter.Body.setStatic(mango2.body, false);
  }

  var distance3 = stone.body.position.x - mango3.body.position.x
  if(distance3>15) {
    Matter.Body.setStatic(mango3.body, false);
  }

  var distance4 = stone.body.position.x - mango4.body.position.x
  if(distance4>15) {
    Matter.Body.setStatic(mango4.body, false);
  }

  var distance5 = stone.body.position.x - mango5.body.position.x
  if(distance5>15) {
    Matter.Body.setStatic(mango5.body, false);
  }

  var distance6 = stone.body.position.x - mango6.body.position.x
  if(distance6>15) {
    Matter.Body.setStatic(mango6.body, false);
  }

  var distance7 = stone.body.position.x - mango7.body.position.x
  if(distance7>15) {
    Matter.Body.setStatic(mango7.body, false);
  }

  var distance8 = stone.body.position.x - mango8.body.position.x
  if(distance8>15) {
    Matter.Body.setStatic(mango8.body, false);
  }

  var distance9 = stone.body.position.x - mango9.body.position.x
  if(distance9>15) {
    Matter.Body.setStatic(mango9.body, false);
  }

  textSize(35); 
  text("Press space to try again!", 70,350);
  drawSprites();
 
}

function mouseDragged() {
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});   
}

function mouseReleased() {
	rubber.fly();
}

function keyPressed() {
  if(keyCode === 32) {
	rubber.attach(stone.body);
  }
}





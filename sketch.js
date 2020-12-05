const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1;

function setup() {
  createCanvas(400,400);

  engine = Engine.create(); // automatically one world will be created
  world = engine.world;

  var options = 
  {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);
  //console.log(box);
  console.log(ground.position.y);

  box1 = new Box(200,200,50,80);


 
}

function draw() {
  background("yellow");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  box1.display();

}
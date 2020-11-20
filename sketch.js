const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world;
var object

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var factors={
    mass:500,
    density:1.5


  }
 object=Bodies.rectangle(400,200,50,80,factors);
 World.add(world,object);
 console.log(object)

}

function draw() {
  background(0);  
 Engine.update(engine);
 rect(object.position.x,object.position.y,50,80);
}
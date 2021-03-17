
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,ball;


function setup(){
  createCanvas(400,400);
  myengine=Engine.create();

//my world is equal to my engine's world
myworld=myengine.world;

//JSON
var go={
  isStatic: true

}
ground=Bodies.rectangle(200,380,400,5,go)
World.add(myworld,ground)
var bo={
  restitution: 0.1

}

ball=Bodies.circle(200,200,25,bo)
World.add(myworld,ball)

console.log(ball)
}


function draw(){
background("black");

Engine.update(myengine);

rectMode(CENTER);
rect(200,200,50,50);
//rect(X postion of object,Y of object, W, H)
rect(ground.position.x,ground.position.y,400,5);

//circle(X postion of object,Y of object, D)
//circle(ball.position.x,ball.position.y,50)

//ellipse(X postion of object,Y of object, X-Diameter,Y-Diameter)
//ellipse(ball.position.x,ball.position.y,25,25)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25)
}
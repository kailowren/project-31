const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, rWall, lWall, roof;
var d1, d2, d3, d4, d5, d6, d7, d8;

var particles = [];
var plinkos = [];
var divisions = [];

function preload(){

}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  d1 = new Division(240,775,480,10);
  
  d2 = new Division(10,700,10,350);
  d3 = new Division(90,700,10,350);
  d4 = new Division(170,700,10,350);
  d5 = new Division(250,700,10,350);
  d6 = new Division(330,700,10,350);
  d7 = new Division(400,700,10,350);
  d8 = new Division(470,700,10,350);
  
  ground = new Ground(240,790,480,20);
  rWall = new Ground(479,400,20,800);
  lWall = new Ground(1,400,20,800);
  roof = new Ground(240,1,800,20);
  
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }


}

function draw() {
  background(0);  
  Engine.update(engine);
  
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  d8.display();
  
  ground.display();
  rWall.display();
  lWall.display();
  roof.display();

  drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig,pig1;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,370,50,50);
    box2= new Box(900,370,50,50);
    ground=new Ground(600,380,1200,20);
    pig=new Pig(800,370);
    log1=new Log(800,340,300,PI/2);

    box3= new Box(700,320,50,50);
    box4= new Box(900,320,50,50);
    pig1=new Pig(800,320);
    log2=new Log(800,290,300,PI/2);

    box5= new Box(800,270,50,50);
    log3=new Log(750,270,150,PI/4);
    log4=new Log(850,270,150,-PI/4);

    bird=new Bird(200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}
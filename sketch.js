const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1, pig2, log1, bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(850,320,50,50);
    box3 = new Box(700,250,50,50);
    box4 = new Box(850,250,50,50);
    box5 = new Box(780,130,50,50);
    ground = new Ground(600,height,1200,20)
    pig1= new Pig(775,320);
    pig2 = new Pig(775,250);
    log1= new Log(775,260,220,PI/2);
    log2 = new Log(775,160,220,PI/2);
    log3 = new Log(780,130,100,PI/7);
    log4 = new Log(810,130,100,-PI/7);
    bird1= new Bird(30,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}
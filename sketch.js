const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ball,sling;
var block1,block2,ground;

function preload(){
    polygon = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball();
    sling = new Chain(ball.mysecondBody, {x : 100, y : 200});
    ground = new Ground(350,590,700,20);
    block1 = new Block(400,500,60,100);
    block2 = new Block(400,300,60,100);
    block3 = new Block(400,600,60,100);
    block4 = new Block(400,100,60,100);
    block5 = new Block(400,400,60,100);
    block6 = new Block(400,200,60,100);
}

function draw(){
    background("darkblue");
    Engine.update(engine);
    ball.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    ground.display();
    sling.display();  
    drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(ball.mysecondBody,{x : mouseX, y : mouseY})

}

function mouseReleased(){
sling.fly();
}

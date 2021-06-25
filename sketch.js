const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var score=0
var building
var gameState="onMonster1"

function preload() {
  bg = loadImage("gamingbackground1.jpg");
  building = loadImage("buildingimg.jpg")
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 3000, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1800,550,300);
  monster1 = new Monster(1600,550,300)

  box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70)
  box6 = new Box(800, 100, 70, 70)
  box10 = new Box(800, 100, 70, 70)
  box11 = new Box(800, 100, 70, 70)
  
}

function draw() {
  background(bg);
textSize(40)
text("Score : "+score,200,40);

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
 
  box10.display();
  box11.display();

  hero.display();
  rope.display();
  monster.display();
  monster1.display();

}

function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX, y:mouseY})

}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bgd_img, bgd;
var superhero_flying, superhero;
var monster_animation;

function preload() {
//preload the images here
  bgd_img = loadImage("images/GamingBackground.png");
  //monster_animation = loadAnimation("images/Monster-01.png","images/Monster-02.png");
  //superhero_flying = loadAnimation("images/S.png","images/Superhero-02.png")
}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  hero = new Hero(800,400,800,300);
  ground = new Ground(1800,600,800,25);
  sling = new Fly(hero.body, {x: mouseX, y: mouseY});

  box1 = new Block(1480,500,80,100);
  box2 = new Block(1560,500,80,100);
  box3 = new Block(1640,500,80,100);
  box4 = new Block(1720,500,80,100);
  box5 = new Block(1800,500,80,100);
  box6 = new Block(1880,500,80,100);
  box7 = new Block(1960,500,80,100);
  box8 = new Block(2040,500,80,100);
  box9 = new Block(2120,500,80,100);
 
  box10 = new Block(1560,400,80,100);
  box11 = new Block(1640,400,80,100);
  box12 = new Block(1720,400,80,100);
  box13 = new Block(1800,400,80,100);
  box14 = new Block(1880,400,80,100);
  box15 = new Block(1960,400,80,100);
  box16 = new Block(2040,400,80,100);

  box17 = new Block(1640,300,80,100);
  box18 = new Block(1720,300,80,100);
  box19 = new Block(1800,300,80,100);
  box20 = new Block(1880,300,80,100);
  box21 = new Block(1960,300,80,100);

  box22 = new Block(1720,200,80,100);
  box23 = new Block(1800,200,80,100);
  box24 = new Block(1880,200,80,100);

  box25 = new Block(1800,100,80,100);

  invisible_ground = new Ground(2500,500,400,25)

  monster = new Monster(2500,300,300,300)
}

function draw() {
  background(bgd_img);
  Engine.update(engine);

  hero.display();
  sling.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  //invisible_ground.display()
  
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, { x:mouseX, y:mouseY })
}
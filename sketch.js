const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {

    isStatic : true
  }
  //create player base body
  playerBase = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, playerBase);

  //create player body

  player = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, playerBase);

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function

  //show the playerbase image using image() function


  Engine.update(engine);
  Engine.update(engine);
  rect(playerBase.position.x, playerBase.position.y, width * 2, 1);
  rect(player.position.x, player.position.y,width*2,1);
  push();
  imageMode(CENTER);
  image(baseImage,playerBase.position.x, playerBase.position.y, width*2, 1);
   pop();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

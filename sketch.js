var spaceship;
var spaceshipImg;
var backgroundImg;

function preload() {
  spaceshipImg = loadImage("assets/spaceship-removebg-preview.png");
  backgroundImg = loadImage("assets/Background.jpg");
}

function setup() {
  createCanvas(800,400);
  spaceship = createSprite(400, 200, 50, 50);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.2;
}

function draw() {
  background(backgroundImg);
  drawSprites();
}


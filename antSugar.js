var population;
var lifeSpan = 250;
var count = 0;
var sugar;
var ox = 100;
var oy = 150;
var ow = 200;
var oh = 10;
var maxForce = 0.2;
var generationCount = 0;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  generationCount++;
  sugar = createVector(width/2, 50);
}

function draw() {
  background(0);
  population.run();
  textSize(20);
  fill(255, 255, 255);
  text("Generation count " + generationCount, 120, 25);
  if (count === lifeSpan) {
    population.evaluate();
    population.selection();
    count = 0;
    generationCount++;
  }
  count++;
  rect(ox, oy, ow, oh);
  rect(sugar.x, sugar.y, 10, 10);
}

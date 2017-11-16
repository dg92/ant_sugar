var population;
var lifeSpan = 250;
var lifeOfAntPara;
var count = 0;
var sugar;
var ox = 100;
var oy = 150;
var ow = 200;
var oh = 10;
var maxForce = 0.2;

function setup() {
  createCanvas(400, 300);
  population = new Population();
  lifeOfAntPara = createP();
  sugar = createVector(width/2, 50);
}

function draw() {
  background(0);
  population.run();
  lifeOfAntPara.html(count);
  if (count === lifeSpan) {
    population.evaluate();
    population.selection();
    count = 0;
  }
  count++;
  rect(ox, oy, ow, oh);
  // rectMode(CENTER);
  rect(sugar.x, sugar.y, 10, 10);
}

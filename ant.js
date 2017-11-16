function Ant(dna) {
  this.pos = createVector(width/2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.fitness = 0;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new DNA();
  }
  this.completed = false;
  this.crashed = false;
}

Ant.prototype.applyForce = function(force) {
  this.acc.add(force);
}

Ant.prototype.update = function() {
  var d = dist(this.pos.x, this.pos.y, sugar.x, sugar.y);
  if (d < 10) {
    this.completed = true;
  }
  if(this.pos.x > ox && this.pos.x < ox+ow && this.pos.y > oy && this.pos.y < oy+oh ) {
    this.crashed = true;
  }
  // if(this.pos.x > width || this.pos.x < 0) {
  //   this.crashed = true;
  // }
  // if(this.pos.y > height || this.pos.y < 0) {
  //   this.crashed = true;
  // }
  this.applyForce(this.dna.genes[count]);
  if(!this.completed && !this.crashed) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}

Ant.prototype.show = function() {
  push();
  noStroke();
  translate(this.pos.x, this.pos.y);
  rotate(this.vel.heading());
  rectMode(CENTER);
  ellipse(0, 0, 5);
  pop();
}

Ant.prototype.calFitness = function() {
  var d = dist(this.pos.x, this.pos.y, sugar.x, sugar.y);
  this.fitness = 1/d;
  if (this.completed) {
    this.fitness *= 50;
  }
  if(this.crashed) {
    this.fitness /= 100;
  }
 }

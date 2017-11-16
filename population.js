function Population() {
  this.ants = [];
  this.popSize = 50;
  this.pool = [];
  for (var i = 0; i < this.popSize; i++) {
    this.ants[i] = new Ant();
  }
}

Population.prototype.run = function() {
  for (var i = 0; i < this.popSize; i++) {
    this.ants[i].update();
    this.ants[i].show();
  }
}

Population.prototype.evaluate = function() {
  var maxFit = 0;
  for (var i = 0; i < this.popSize; i++) {
    this.ants[i].calFitness();
    if (this.ants[i].fitness > maxFit) {
      maxFit = this.ants[i].fitness;
    }
  }
  // createP(maxFit);
  for (var i = 0; i < this.popSize; i++) {
    this.ants[i].fitness /= maxFit;
  }
  this.pool = [];

  for (var i = 0; i < this.popSize; i++) {
    var n = this.ants[i].fitness * 100;
    for (var j = 0; j < n; j++) {
      this.pool.push(this.ants[i]);
    }
  }
}

Population.prototype.selection = function() {
  var newAnts = [];
  for (var i = 0; i < this.ants.length; i++) {
    var parentA = random(this.pool).dna;
    var parentB = random(this.pool).dna;
    var child = parentA.crossover(parentB);
    child.mutation();
    newAnts[i] = new Ant(child);
  }
  this.ants = newAnts;
}

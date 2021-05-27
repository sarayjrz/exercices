function Combination() {
  this.pegs = [];
  this.view = new View();
  this.strings = new Strings();

  // orden superior
  this.random = function() {
    let result = [];
    for(let i = 0; i < Combination.LENGTH; i++) {
      result.push(this.randomColor());
    }
    this.set(result);
  }

  this.randomColor = function() {
    return Combination.COLORS[Math.floor(Math.random() * Combination.COLORS.length)];
  }

  // orden superior
  this.read = function() {
    let result = [];
    for(let i = 0; i < Combination.LENGTH; i++) {
      result.push(this.readColor());
    }
    this.set(result);
  }

  this.readColor = function() {
    let option;
    let error;
    do {
      option = prompt(this.strings.getChooseColor());
      error = Combination.COLORS[option - 1] == undefined;
      if(error) {
        this.view.showColorError();
      }
    } while(error);
    this.view.showColorSuccess();
    return Combination.COLORS[option - 1];
  }

  this.getColor = function(position) {
    return this.pegs[position];
  }

  this.set = function(pegs) {
    this.pegs = pegs;
  }
}

Combination.LENGTH = 4;
Combination.COLORS = [
  "GREEN",
  "RED",
  "BLUE",
  "YELLOW",
  "ORANGE"
];

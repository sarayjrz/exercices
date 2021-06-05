function Combination() {
  this.pegs = null;

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

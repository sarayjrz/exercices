function Code() {
  this.LENGTH = Feedback.LENGTH;
  this.colors = new Colors();
  this.pegs = [];
  this.message = new Console();

  this.equals = function(code) {
    for(let i = 0; i < this.LENGTH; i++) {
      if(!this.hasSameColorAndPosition(code.getColor(i), i)) {
        return false;
      }
    }
    return true;
  }

  this.hasSameColor = function(color) {
    for(let i = 0; i < this.pegs.length; i++) {
      if(this.pegs[i] == color) {
        return true;
      }
    }
    return false;
  }

  this.hasSameColorAndPosition = function(color, position) {
    return this.pegs[position] == color;
  }

  this.getColor = function(position) {
    return this.pegs[position];
  }

  this.generateRandom = function() {
    let pegs = [];
    for(let i = 0; i < this.LENGTH; i++) {
      pegs.push(this.colors.chooseRandom());
    }
    this.set(pegs);
  }

  this.read = function() {
    let pegs = [];
    for(let i = 0; i < this.LENGTH; i++) {
      pegs.push(this.colors.read());
    }
    this.set(pegs);
  }

  this.set = function(pegs) {
    this.pegs = pegs;
  }
}

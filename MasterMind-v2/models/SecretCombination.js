function SecretCombination() {
  this.combination = new Combination();
  this.combination.set(random());

  function random() {
    let result = [];
    for(let i = 0; i < Combination.LENGTH; i++) {
      result.push(randomColor());
    }
    return result;
  }

  function randomColor() {
    return Combination.COLORS[Math.floor(Math.random() * Combination.COLORS.length)];
  }

  this.equals = function(combination) {
    return this.countBlacks(combination) == Combination.LENGTH;
  }

  this.isSameColorAndPosition = function(color, position) {
    return this.combination.getColor(position) == color;
  }

  this.isSameColor = function(color) {
    for(let i = 0; i < Combination.LENGTH; i++) {
      if(this.combination.getColor(i) == color) {
        return true;
      }
    }
    return false;
  }

  this.countBlacks = function(combination) {
    let count = 0;
    for(let i = 0; i < Combination.LENGTH; i++) {
      if(this.isSameColorAndPosition(combination.getColor(i), i)) {
        count++;
      }
    }
    return count;
  }

  this.countWhites = function(combination) {
    let count = 0;
    for(let i = 0; i < Combination.LENGTH; i++) {
      if(this.isSameColor(combination.getColor(i))) {
        count++;
      }
    }
    return count;
  }

  this.feedback = function(combination) {
    let blacks = this.countBlacks(combination);
    let whites = this.countWhites(combination) - blacks;
    return {
      blacks: blacks,
      whites: whites
    }
  }

  this.getCombination = function() {
    return this.combination;
  }
}

function Board() {
  this.attempts = [];

  this.add = function(combination) {
    this.attempts.push(combination);
  }

  this.isLoser = function() {
    return this.attempts.length == MasterMind.MAX_ATTEMPTS;
  }

  this.getAttempts = function() {
    return this.attempts.length;
  }

  this.getLastCombination = function() {
    return this.attempts[this.attempts.length - 1];
  }
}

function Board() {
  this.attempts = [];
  this.secretCombination = new SecretCombination();

  this.add = function(combination) {
    this.attempts.push(combination);
  }

  this.isLoser = function() {
    return this.attempts.length == MasterMind.MAX_ATTEMPTS;
  }

  this.isWinner = function() {
    return this.secretCombination.equals(this.getLastCombination());
  }

  this.getLastCombination = function() {
    return this.attempts[this.attempts.length - 1];
  }

  this.getSecretCombination = function() {
    return this.secretCombination.getCombination();
  }
}

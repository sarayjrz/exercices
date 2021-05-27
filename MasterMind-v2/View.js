function View() {
  this.strings = new Strings();

  this.showColorError = function() {
    alert(this.strings.get("COLOR_ERROR"));
  }

  this.showColorSuccess = function() {
    alert(this.strings.get("COLOR_SUCCESS"));
  }

  this.showFeedback = function(feedback) {
    console.log(this.strings.get("YOUR_FEEDBACK") + this.strings.getFeedback(feedback));
  }

  this.showGameOver = function(secretCombination) {
    console.log(this.strings.get("GAME_OVER") + this.strings.getCombination(secretCombination));
  }

  this.showProposedCombination = function(combination) {
    console.log(this.strings.get("PROPOSED_COMBINATION_IS") + this.strings.getCombination(combination));
  }

  this.showStartAttempt = function(attempts) {
    console.log(this.strings.get("ATTEMPT") + attempts + "/" + MasterMind.MAX_ATTEMPTS + ".");
    alert(this.strings.get("SUGGEST_COMBINATION"));
  }

  this.showVictory = function() {
    console.log(this.strings.get("VICTORY"));
  }
}

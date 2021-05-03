function CodeMaker() {
  this.codeToBreak = new Code();
  this.codeToBreak.generateRandom();

  this.getFeedback = function(codeBreaker) {
    return new Feedback(
      this.getBlackPegs(codeBreaker.getLastCode()),
      this.getWhitePegs(codeBreaker.getLastCode())
    );
  }

  this.getBlackPegs = function(code) {
    let matches = 0;
    for(let i = 0; i < Feedback.LENGTH; i++) {
      if(code.hasSameColorAndPosition(this.codeToBreak.getColor(i), i)) {
        matches++;
      }
    }
    return matches;
  }

  this.getWhitePegs = function(code) {
    let matches = 0;
    for(let i = 0; i < Feedback.LENGTH; i++) {
      if(code.hasSameColor(this.codeToBreak.getColor(i))) {
        matches++;
      }
    }
    return matches - this.getBlackPegs(code);
  }
}

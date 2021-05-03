function MasterMind() {
  this.MAX_ATTEMPTS = 10;
  this.codeMaker = new CodeMaker();
  this.codeBreaker = new CodeBreaker();

  this.play = function() {
    let attempts = 0;
    let feedback;
    let codeBroken;
    do {
      this.codeBreaker.readNewCode();
      feedback = this.codeMaker.getFeedback(this.codeBreaker);
      codeBroken = feedback.isWinner();
      if(!codeBroken) {
        feedback.write();
        attempts++;
      }
    } while(attempts < this.MAX_ATTEMPTS || !codeBroken)
    new Console().writeFinal(codeBroken);
  }
}

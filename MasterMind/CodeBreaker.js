function CodeBreaker() {
  this.codes = [];

  this.readNewCode = function() {
    let code = new Code();
    code.read();
    this.codes.push(code);
    new Console().writeProposedCode(this.getLastCode());
  }

  this.getLastCode = function() {
    return this.codes[this.codes.length - 1];
  }
}

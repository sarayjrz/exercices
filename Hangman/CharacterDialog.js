function CharacterDialog() {
  this.screen = new Screen();
  this.strings = new Strings();
  this.suggestedCharacters = [];

  this.read = function() {
    let str;
    let error;
    do {
      str = prompt(this.strings.get("WRITE_CHARACTER")).toUpperCase();
      error = this.isInvalid(str) || this.isDuplicated(str);
      if(this.isInvalid(str)) {
        this.screen.showInvalid();
      } else if(this.isDuplicated(str)) {
        this.screen.showDuplicated();
      }
    } while(error);
    this.suggestedCharacters.push(str);
    return this.suggestedCharacters[this.suggestedCharacters.length - 1];
  }

  this.isInvalid = function(str) {
    return str.match(new RegExp(/^[A-Z]$/gi)) == null;
  }

  this.isDuplicated = function(char) {
    for(let i = 0; i < this.suggestedCharacters.length; i++) {
      if(this.suggestedCharacters[i].indexOf(char) == 0) {
        return true;
      }
    }
    return false;
  }

  this.getSuggestedCharacters = function() {
    return this.suggestedCharacters;
  }
}

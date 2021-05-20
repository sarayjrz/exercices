function Screen() {
  this.strings = new Strings();

  this.showBoard = function(gameMaster, characterDialog) {
    let result = getTriesLeft(gameMaster.getTriesLeft());
    result += this.strings.get("SEPARATOR");
    result += getMaskedWord(gameMaster.getMaskedWord());
    result += this.strings.get("SEPARATOR");
    result += getSuggestedCharacters(characterDialog.getSuggestedCharacters());
    console.log(result);
  }

  function getTriesLeft(triesLeft) {
    let result = new Strings().get("TRIES_LEFT") + " " + triesLeft;
    return result;
  }

  function getMaskedWord(maskedWord) {
    let result = "";
    for(let i = 0; i < maskedWord.length; i++) {
      result += maskedWord[i].toUpperCase() + " ";
    }
    return result;
  }

  function getSuggestedCharacters(characters) {
    let result = "";
    if(characters.length != 0) {
      result += new Strings().get("SUGGESTED_CHARACTERS") + "\n";
      for(let i = 0; i < characters.length; i++) {
        result += characters[i] + ", ";
      }
    }
    return result.substr(0, result.length - 2);
  }

  this.showInvalid = function() {
    alert(this.strings.get("INVALID_CHARACTER"));
  }

  this.showDuplicated = function() {
    alert(this.strings.get("DUPLICATED_CHARACTER"));
  }

  this.showGameOver = function(gameMaster) {
    console.log(this.strings.get("GAME_OVER") + gameMaster.getSecretWord() + ".");
  }

  this.showVictory = function() {
    console.log(this.strings.get("VICTORY"));
  }
}

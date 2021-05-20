function Strings() {
  this.get = function(key) {
    return Strings[key];
  }
}

Strings.DUPLICATED_CHARACTER = "Duplicated character. Please, try again.";
Strings.GAME_OVER = "You lost! The secret word is ";
Strings.INVALID_CHARACTER = "Invalid character. Please, try again.";
Strings.MATCHES_FOUND = "Matches found!"
Strings.NO_MATCHES_FOUND = "The letter you suggested is not in the word."
Strings.SEPARATOR = "\n\n\n";
Strings.TRIES_LEFT = "Tries left:";
Strings.SUGGESTED_CHARACTERS = "Suggested characters:";
Strings.WRITE_CHARACTER = "Write a character:";
Strings.VICTORY = "You won! Congratulations!";

function Strings() {
  this.getChooseColor = function() {
    let result = this.get("CHOOSE_COLOR");
    for(let i = 0; i < Combination.COLORS.length; i++) {
      result += "\n" + (i + 1) + ". " + this.get(Combination.COLORS[i]);
    }
    return result;
  }

  this.getCombination = function(combination) {
    let result = "";
    for(let i = 0; i < Combination.LENGTH; i++) {
      result += this.get(combination.getColor(i)) + ", ";
    }
    return result.slice(0, -2) + ".";
  }

  this.getFeedback = function(feedback) {
    return this.get("BLACKS") + feedback.blacks + "\n" + this.get("WHITES") + feedback.whites;
  }

  this.get = function(key) {
    return Strings[key];
  }
}

Strings.ATTEMPT = "Attempt ";
Strings.BLACKS = "Blacks: ";
Strings.BLUE = "Blue";
Strings.CHOOSE_COLOR = "Please pick one color from this list:";
Strings.COLOR_ERROR = "Invalid option. Please, try again.";
Strings.COLOR_SUCCESS = "Color added successfully.";
Strings.GAME_OVER = "Game over! The secret combination was: ";
Strings.GREEN = "Green";
Strings.ORANGE = "Orange";
Strings.PROPOSED_COMBINATION_IS = "The proposed combination is: ";
Strings.RED = "Red";
Strings.SUGGEST_COMBINATION = "Suggest a new combination.";
Strings.VICTORY = "Congratulations! You broke the secret code!";
Strings.WHITES = "Whites: "
Strings.YELLOW = "Yellow";
Strings.YOUR_FEEDBACK = "Here is your feedback:\n";

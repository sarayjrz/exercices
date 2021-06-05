function CombinationView() {
  this.read = function() {
    alert(this.getMessage("SUGGEST_NEW_COMBINATION"));
    let result = [];
    for(let i = 0; i < Combination.LENGTH; i++) {
      result.push(this.readColor());
    }
    return result;
  }

  this.readColor = function() {
    let option;
    let error;
    do {
      option = prompt(this.messageChooseColor());
      error = Combination.COLORS[option - 1] == undefined;
      if(error) {
        this.showColorError();
      }
    } while(error);
    this.showColorSuccess();
    return Combination.COLORS[option - 1];
  }

  this.messageChooseColor = function() {
    let result = this.getMessage("CHOOSE_COLOR");
    for(let i = 0; i < Combination.COLORS.length; i++) {
      result += "\n" + (i + 1) + ". " + this.getMessage(Combination.COLORS[i]);
    }
    return result;
  }

  this.showAttempt = function(combination) {
    console.log(this.getMessage("SUGGESTED_COMBINATION") + "\n" + this.getColors(combination) + "." );
  }

  this.showColorError = function() {
    alert(this.getMessage("COLOR_ERROR"));
  }

  this.showColorSuccess = function() {
    alert(this.getMessage("COLOR_SUCCESS"));
  }

  this.getColors = function(combination) {
    let result = "";
    for(let i = 0; i < Combination.LENGTH; i++) {
      result += this.getMessage(combination.getColor(i)) + ", ";
    }
    return result.slice(0, -2);
  }

  this.getMessage = function(key) {
    return CombinationView[key];
  }
}

CombinationView.BLUE = "Blue";
CombinationView.CHOOSE_COLOR = "Please pick one color from this list:";
CombinationView.COLOR_ERROR = "Invalid option. Please, try again.";
CombinationView.COLOR_SUCCESS = "Color added successfully.";
CombinationView.GREEN = "Green";
CombinationView.ORANGE = "Orange";
CombinationView.RED = "Red";
CombinationView.SUGGEST_NEW_COMBINATION = "Suggest a new combination:";
CombinationView.SUGGESTED_COMBINATION = "The suggested combination is: ";
CombinationView.YELLOW = "Yellow";

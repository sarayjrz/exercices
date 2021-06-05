function SecretCombinationView() {
  this.showFeedback = function(feedback) {
    console.log(this.getMessage("YOUR_FEEDBACK") + "\n" + this.getMessage("BLACKS") + feedback.blacks + "\n" + this.getMessage("WHITES") + feedback.whites);
  }

  this.getMessage = function(key) {
    return SecretCombinationView[key];
  }
}

SecretCombinationView.BLACKS = "Blacks: ";
SecretCombinationView.WHITES = "Whites: "
SecretCombinationView.YOUR_FEEDBACK = "Here is your feedback:";

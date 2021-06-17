function SecretCombinationView() {
  this.showFeedback = function(feedback) {
    console.log(this.getMessage("FEEDBACK_IS") +
      "\n" + this.getMessage("BLACKS") + feedback.blacks +
      "\n" + this.getMessage("WHITES") + feedback.whites);
  }

  this.getMessage = function(key) {
    return SecretCombinationView[key];
  }
}

SecretCombinationView.BLACKS = "Blacks: ";
SecretCombinationView.WHITES = "Whites: "
SecretCombinationView.FEEDBACK_IS = "The feedback is:";

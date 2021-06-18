function SecretCombinationView() {
  this.messageFeedback = function(feedback) {
    return this.getMessage("FEEDBACK_IS") +
      "\n" + this.getMessage("BLACKS") + feedback.blacks +
      "\n" + this.getMessage("WHITES") + feedback.whites;
  }

  this.getMessage = function(key) {
    return SecretCombinationView[key];
  }
}

SecretCombinationView.BLACKS = "Blacks: ";
SecretCombinationView.FEEDBACK_IS = "Feedback:";
SecretCombinationView.WHITES = "Whites: "

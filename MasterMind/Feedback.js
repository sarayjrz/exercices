function Feedback(black, white) {
  this.black = black;
  this.white = white;
  this.COLORS = new Colors().FEEDBACK;

  this.write = function() {
    let message = Console.GIVE_FEEDBACK;
    for(let i = 0; i < this.COLORS.length; i++) {
      message += "\n" + Colors[this.COLORS[i].toUpperCase()] + ": " + this[this.COLORS[i]];
    }
    alert(message);
  }

  this.isWinner = function() {
    return this.black == Feedback.LENGTH;
  }
}

Feedback.LENGTH = 4;

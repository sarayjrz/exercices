function Colors() {
  this.COLORS = [
    "green",
    "red",
    "blue",
    "yellow",
    "orange"
  ];
  this.FEEDBACK = [
    "black",
    "white"
  ];
  this.message = new Console();

  this.chooseRandom = function() {
    return this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
  }

  this.read = function() {
    this.message.writeChooseColor(this.COLORS);
    let option = null;
    let error = false;
    do {
      option = parseInt(prompt(this.message.writeChooseNumber(this.COLORS)));
      error = this.COLORS[option - 1] == null || this.COLORS[option - 1] == undefined;
      if(error) {
        this.message.writeWrongOption();
      }
    } while (error);
    return this.COLORS[option - 1];
  }
}

Colors.GREEN = "Verde";
Colors.RED = "Rojo";
Colors.BLUE = "Azul";
Colors.YELLOW = "Amarillo";
Colors.ORANGE = "Naranja";
Colors.BLACK = "Negras";
Colors.WHITE = "Blancas";

function Message() {
  this.writeProposedCode = function(code) {
    alert(this.get("PROPOSED_CODE_IS") + this.getCodeColors(code.pegs) + ".");
  }

  this.writeChooseColor = function(colors) {
    let message = this.get("CHOOSE_COLOR");
    for(let i = 0; i < colors.length; i++) {
      message +=  "\n" + (i + 1) + ". " + Colors[colors[i].toUpperCase()];
    }
    alert(message);
  }

  this.writeChooseNumber = function(colors) {
    return this.get("WHICH_COLOR") + colors.length + ".";
  }

  this.writeFinal = function(codeBroken) {
    let key = "YOU_LOSE";
    if (codeBroken) {
      key = "YOU_WIN";
    }
    alert(this.get(key));
  }

  this.getCodeColors = function(colors) {
    let message = "";
    for(let i = 0; i < colors.length; i++) {
      message += Colors[colors[i].toUpperCase()] + ", ";
    }
    message = message.substring(0, message.length - 2);
    return message;
  }

  this.writeWrongOption = function() {
    alert(this.get("WRONG_OPTION"));
  }

  this.get = function(key) {
    return Message[key];
  }
}

Message.CHOOSE_COLOR = "Propón un nuevo código escogiendo un color del siguiente listado:";
Message.WHICH_COLOR = "Qué color escoges? 1 - ";
Message.WRONG_OPTION = "Opción incorrecta, vuelva a intentarlo.";
Message.PROPOSED_CODE_IS = "La combinación propuesta es: ";
Message.GIVE_FEEDBACK = "¡No has acertado! Aquí tienes tu feedback: ";
Message.YOU_WIN = "¡Felicidades! ¡Acertaste la combinación!";
Message.YOU_LOSE = "Tus intentos han terminado. Has perdido la partida.";

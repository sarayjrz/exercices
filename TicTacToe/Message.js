function Message() {
  this.data = {
    TURN_OF: "Es el turno del jugador ",
    REMOVE_INVALID: "La coordenada de origen no es válida. Seleccione una casilla perteneciente a su color.",
    PUT_INVALID: "La coordenada de destino no es válida. Seleccione una casilla vacía.",
    GET_ROW_TARGET: "Escribe la fila de la coordenada donde pondrás tu ficha:",
    GET_COL_TARGET: "Escribe la columna de la coordenada donde pondrás tu ficha:",
    GET_ROW_ORIGIN: "Escribe la fila de la coordenada donde quitarás tu ficha:",
    GET_COL_ORIGIN: "Escribe la columna de la coordenada donde quitarás tu ficha:",
    COORDINATE_INVALID: "La coordenada no es válida o está fuera de los límites del tablero.",
    VICTORY: "Fin de la partida! Ha ganado el jugador "
  };

  this.get = function(key) {
    return this.data[key];
  }
}

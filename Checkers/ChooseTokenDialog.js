function ChooseTokenDialog() {
  this.strings = new Strings();

  this.show = function() {
    let error;
    let coordinate;
    do {
      let row = parseInt(prompt(this.strings.getChooseRow())) - 1;
      let column = parseInt(prompt(this.strings.getChooseColumn())) - 1;
      coordinate = new Coordinate(row, column);
      error = !coordinate.isValid();
    } while(error);
    return coordinate;
  }
}

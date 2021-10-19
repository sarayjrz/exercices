function Turn() {
  this.value = 0;

  this.change = function() {
    this.value = (this.value + 1) % 2;
  }
}

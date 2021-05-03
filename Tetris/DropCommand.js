function DropCommand() {
  this.title = "DROP";
  this.executed = false;

  this.getTitle = function() {
    return this.title;
  }

  this.execute = function() {
    this.executed = true;
  }

  this.getExecuted = function() {
    return this.executed;
  }

}

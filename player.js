class Player {
  constructor(infoplayer, infoToken) {
    this.id = infoplayer;
    this.token = `assets/${infoToken}.svg`;
    this.wins = [];
  }
  saveWinsToStorage() {
    var wins = JSON.stringify(this);
  localStorage.setItem(`${this.id}`,wins);
    // JSON.stringity
  }
  retrieveWinsFromStorage() {
    // JSON.parse
  }
}

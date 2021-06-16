class Player {
  constructor(infoplayer, infoToken) {
    this.id = infoplayer;
    this.token = infoToken;
    this.moves = [];
    this.wins = [];
    this.retrieveWinsFromStorage();

  }

  addWin(winnerBoard) {
    this.wins.push(winnerBoard);
    this.saveWinsToStorage();
  }

  saveWinsToStorage() {
    var saveWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id}`, saveWins);
  }

  retrieveWinsFromStorage() {
    var retriveWins = localStorage.getItem(`${this.id}`);
    this.wins = JSON.parse(retriveWins)|| [];

  }
};

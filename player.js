class Player {
  constructor(infoplayer, infoToken) {
    this.id = infoplayer;
    this.token = infoToken;
    // this.token = `assets/${infoToken}.svg`;
    this.wins = retrieveWinsFromStorage() || [];
    // this.wins = [];
  }
  addWin(winnerBoard) {
    this.wins.push(winnerBoard);

  }
  saveWinsToStorage() {
    var saveWins = JSON.stringify(this);
    // I need to get from local storage per player ( id?) each wins
  localStorage.setItem(`${this.id}`, saveWins);

  }
  retrieveWinsFromStorage() {
    // do i need to instanciate again? loop and instaciate? or just get only the info from wins

    var retriveWins = localStorage.getItem(`${this.id}`);
    this.wins = JSON.parse(retriveWins[this.wins]);?
    // do i need to return anythig?

  }
}

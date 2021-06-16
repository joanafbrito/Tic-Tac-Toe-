class Player {
  constructor(infoplayer, infoToken) {
    this.id = infoplayer;
    this.token = infoToken;
    this.moves = [];
    // this.token = `assets/${infoToken}.svg`;
    // this.wins = retrieveWinsFromStorage() || [];
    // this.numberWins = 0;
    this.wins = [];
    this.retrieveWinsFromStorage();

  }
  addWin(winnerBoard) {
    this.wins.push(winnerBoard);
    this.saveWinsToStorage();
    // this.numberWins++;
    // this.numberwins = this.wins.leght

  }
  saveWinsToStorage() {
    var saveWins = JSON.stringify(this.wins);
    // I need to get from local storage per player ( id?) each wins
  localStorage.setItem(`${this.id}`, saveWins);

  }
  retrieveWinsFromStorage() {
    // do i need to instanciate again? loop and instaciate? or just get only the info from wins

    var retriveWins = localStorage.getItem(`${this.id}`);
    this.wins = JSON.parse(retriveWins)|| [];

    // do i need to return anythig?

  }
}

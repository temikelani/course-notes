const team = {
  _players: [
    { firstName: "Jay-Jay", lastName: "Okocha", age: 25 },
    { firstName: "Lionel", lastName: "Messi", age: 26 },
    { firstName: "Christiano", lastName: "Ronaldo", age: 27 }
  ],
  _games: [
    { opponent: "Barcelona", teamPoints: 5, opponentPoints: 2 },
    { opponent: "Manchester United", teamPoints: 4, opponentPoints: 1 },
    { opponent: "Real Madrid", teamPoints: 6, opponentPoints: 7 },
  ],
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    let player = { firstName: firstName, lastName: lastName, age: age };
    this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOponentPoints) {
    game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOponentPoints },
      this._games.push(game)
  }

};

team.addPlayer("Bugs", "Bunny", 76)
team.addGame("Titans", 100, 98)
console.log(team)
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime(){
    let available_data = this.data - (this.users * 5)
    if (available_data >= 10){
      return true
    } else {
      return false
    }
  }
}

const library = new Network(50, 9) 
library.movieTime() // returns false

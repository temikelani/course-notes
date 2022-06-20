class School{
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name
  }

  get level(){
    return this._level
  }

  get numberOfStudents() {
    return this._numberOfStudents
  }

  set numberOfStudents(num){
    if (typeof num === 'number'){
      this._numberOfStudents = num
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }

  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

  pickSubtituteteacher(substituteTeachers){
    const randomNumber = Math.floor(Math.random() * substituteTeachers.length)
    console.log('Sub teacher : ', substituteTeachers[randomNumber])
  }
}

// -----------------------------------

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickUpPolicy){
    super(name, 'primary', numberOfStudents)
    this._pickUpPolicy = pickUpPolicy
  }

  get pickUpPolicy() {
    return this._pickUpPolicy
  }
}

// -----------------------------------

class MiddleSchool extends School{
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents)
  }
}

// -----------------------------------

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents)
    this._sportsTeams = sportsTeams
  }

  get sportsTeams() {
    console.log(this._sportsTeams)
  }
}

// -----------------------------------

const lorraineHansbury = new PrimarySchool('Lorrain Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts()
lorraineHansbury.pickSubtituteteacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith =  new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams
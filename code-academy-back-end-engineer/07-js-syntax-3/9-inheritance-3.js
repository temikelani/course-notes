class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

// super(name) means create an instance of the parent class with this name
// any this. declaration after means add this to the instance you just created

class Nurse extends HospitalEmployee{
  constructor(name, certifications){
    super(name) 
    this._certifications = certifications
  }

  addCertification(cert){
    this._certifications.push(cert)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])

console.log(nurseOlynyk)
console.log(nurseOlynyk.remainingVacationDays)
nurseOlynyk.takeVacationDays(5)
console.log(nurseOlynyk.remainingVacationDays)

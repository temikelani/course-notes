let menu = {
  _meal: ['Spaghetti', 'Beans', 'Corn'],
  _price: 0,
  set meal(mealToCheck) {
    if (Array.isArray(mealToCheck)) {
      this._meal = mealToCheck
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck
    }
  },
  get meal() {
    if (typeof this._meal === "array" && this._meal) {
      return this.meal
    }
  },
  get price() {
    if (typeof this.price === "number") {
      return this._price
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      let special = this._meal[Math.floor(Math.random() * this._meal.length)]
      return `Today's Special is ${special} for $${this._price}`
    } else {
      return `Meal or price was not set correctly!`
    }
  }

}

// -------------------------------
let food = ['rice', 'yam', 'eba']
console.log(`-------- ${typeof food}`)

// -------------------------------
menu.meal = food
menu.price = 6.56;

console.log(menu.todaysSpecial)
console.log(menu)
console.log(`-----------`)

// -------------------------------

menu.meal = []
menu.price = 0;

console.log(menu.todaysSpecial)
console.log(menu)
console.log(`-----------`)
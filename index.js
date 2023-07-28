// Write your code here

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

bigFluffyDog1;
bigFluffyDog2;

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

const myBreakfast = new Breakfast("Toast", "Orange Juice");
console.log(myBreakfast);

const myLunch = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
console.log(myLunch);

const myDinner = new Dinner(
  "Garden Salad",
  "Pumpkin Soup",
  "Grilled Salmon",
  "Chocolate Cake"
);
console.log(myDinner);
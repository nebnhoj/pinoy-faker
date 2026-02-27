const Names = require('./modules/names');
const Contact = require('./modules/contact');
const Government = require('./modules/government');
const Location = require('./modules/location');
const Foods = require('./modules/foods');

class Faker {
  constructor() {
    this.names = new Names();
    this.contact = new Contact();
    this.government = new Government();
    this.location = new Location();
    this.foods = new Foods();
  }
}

module.exports = new Faker();

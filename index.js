const Names = require('./modules/names');
const Contact = require('./modules/contact');
const Government = require('./modules/government');
const Location = require('./modules/location');

class Faker {
  constructor() {
    this.names = new Names();
    this.contact = new Contact();
    this.government = new Government();
    this.location = new Location();
  }
}

module.exports = new Faker();

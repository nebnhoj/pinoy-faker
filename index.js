const Names = require('./modules/names');
const Contact = require('./modules/contact');
const Government = require('./modules/government');

class Faker {
  constructor() {
    this.names = new Names();
    this.contact = new Contact();
    this.government = new Government();
  }
}

module.exports = new Faker();

const test = require('node:test');
const assert = require('node:assert/strict');

const Faker = require('../index');

test('name generator returns strings', () => {
  assert.equal(typeof Faker.names.firstName(), 'string');
  assert.equal(typeof Faker.names.lastName(), 'string');
  assert.equal(typeof Faker.names.fullName('male'), 'string');
});

test('contact generator returns Philippine-like formats', () => {
  assert.match(Faker.contact.mobileNumber(), /^09\d{9}$/);
  assert.match(Faker.contact.landlineNumber(), /^\d{2}-\d{7}$/);
  assert.match(Faker.contact.emailAddress('Maria Clara'), /^maria.clara@[a-z.]+$/);
});

test('government ids return expected format', () => {
  assert.match(Faker.government.tin(), /^\d{3}-\d{3}-\d{3}-\d{3}$/);
  assert.match(Faker.government.sss(), /^\d{2}-\d{7}-\d$/);
  assert.match(Faker.government.philHealth(), /^\d{2}-\d{9}-\d$/);
  assert.match(Faker.government.pagIbig(), /^\d{4}-\d{4}-\d{4}$/);
});

test('location generator returns complete lookup arrays and random values', () => {
  assert.ok(Faker.location.regions().includes('NCR'));
  assert.ok(Faker.location.provinces('Region IV-A').includes('Laguna'));
  assert.ok(Faker.location.cities('Laguna').includes('Calamba'));
  assert.ok(Faker.location.barangays('Quezon City').includes('Commonwealth'));

  assert.equal(typeof Faker.location.region(), 'string');
  assert.equal(typeof Faker.location.province(), 'string');
  assert.equal(typeof Faker.location.city(), 'string');
  assert.equal(typeof Faker.location.barangay(), 'string');

  const fullAddress = Faker.location.fullAddress();
  assert.equal(typeof fullAddress.region, 'string');
  assert.equal(typeof fullAddress.province, 'string');
  assert.equal(typeof fullAddress.city, 'string');
  assert.equal(typeof fullAddress.barangay, 'string');
});

test('foods generator returns filipino food data', () => {
  assert.ok(Faker.foods.dishes().includes('Adobo'));
  assert.ok(Faker.foods.streetFoods().includes('Isaw'));
  assert.ok(Faker.foods.desserts().includes('Halo-Halo'));

  assert.equal(typeof Faker.foods.dish(), 'string');
  assert.equal(typeof Faker.foods.streetFood(), 'string');
  assert.equal(typeof Faker.foods.dessert(), 'string');
  assert.equal(typeof Faker.foods.food(), 'string');
});

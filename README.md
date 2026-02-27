# pinoy-faker

> JavaScript faker utilities focused on Philippine test data.

`pinoy-faker` helps you generate realistic sample values for common Filipino use cases like names, contact details, and government ID formats.

## Installation

```bash
npm install pinoy-faker
```

## Quick start

```js
const faker = require('pinoy-faker');

console.log(faker.names.fullName());
console.log(faker.contact.mobileNumber());
console.log(faker.government.tin());
console.log(faker.location.fullAddress());
console.log(faker.foods.food());
```

## API

### `faker.names`

Generate Filipino-style names.

- `firstName(gender?)`
  - `gender` can be `male`, `female`, `m`, `man`, `boy`, or numeric (`> 0` = male).
  - If omitted, gender is randomized.
- `lastName()`
- `fullName(gender?)`

```js
faker.names.firstName(); // random
faker.names.firstName('male');
faker.names.lastName();
faker.names.fullName('female');
```

### `faker.contact`

Generate contact details with Philippine-friendly formats.

- `mobileNumber()` → `09XXXXXXXXX`
- `landlineNumber(areaCode = '02')` → `<areaCode>-XXXXXXX`
- `emailAddress(name = 'juan.dela.cruz')`

```js
faker.contact.mobileNumber(); // e.g. 09171234567
faker.contact.landlineNumber('032'); // e.g. 032-1234567
faker.contact.emailAddress('Juan Dela Cruz'); // juan.dela.cruz@gmail.com
```

### `faker.government`

Generate formatted mock government numbers for testing (not valid real IDs).

- `tin()` → `XXX-XXX-XXX-XXX`
- `sss()` → `XX-XXXXXXX-X`
- `philHealth()` → `XX-XXXXXXXXX-X`
- `pagIbig()` → `XXXX-XXXX-XXXX`

```js
faker.government.tin();
faker.government.sss();
faker.government.philHealth();
faker.government.pagIbig();
```

### `faker.location`

Generate Philippine location data.

- `regions()` -> all supported regions
- `provinces(region?)` -> all supported provinces (optionally filtered by region)
- `cities(province?)` -> all supported cities (optionally filtered by province)
- `barangays(city?)` -> all supported barangays (optionally filtered by city)
- `region()`
- `province(region?)`
- `city(province?)`
- `barangay(city?)`
- `fullAddress()` → `{ region, province, city, barangay }`

```js
faker.location.regions();
faker.location.provinces('Region IV-A');
faker.location.cities('Laguna');
faker.location.barangays('Calamba');
faker.location.region();
faker.location.province('Region III');
faker.location.city('Cebu');
faker.location.barangay('Quezon City');
faker.location.fullAddress();
```


### `faker.foods`

Generate common Filipino food names.

- `dishes()` -> all supported ulam/main dishes
- `streetFoods()` -> all supported Filipino street food items
- `desserts()` -> all supported dessert/snack items
- `dish()`
- `streetFood()`
- `dessert()`
- `food()` -> random item from all food lists

```js
faker.foods.dishes();
faker.foods.streetFoods();
faker.foods.desserts();
faker.foods.dish();
faker.foods.streetFood();
faker.foods.dessert();
faker.foods.food();
```

## Notes

- Outputs are randomly generated strings intended for development/testing.
- Generated government numbers follow formatting only and are not guaranteed to pass official validation rules.

## Development

Run tests:

```bash
npm test
```

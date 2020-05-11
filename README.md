# pinoy-faker
>JavaScript Faker for Philippines

## Installation

This is an opensource project for Filipino Developers looking for a faker 

 
  Install dependencies:

```bash
$ npm install --save pinoy-faker
```
or

```bash
$ yarn add pinoy-faker
```

## Usage

    const Faker  = require('pinoy-faker')
    let randomFirstName = Faker.names.firstName(); // add params 1 or 0 for gender 
    let randomLastName = Faker.names.lastName(); 
    let randomFullName = Faker.names.fullName(); // add params 1 or 0 for gender 

**Example:**

``` js
    const Faker  = require('pinoy-faker')
    console.log(Faker.names.fullName())
    // outputs: "Juan Dela Cruz"
```
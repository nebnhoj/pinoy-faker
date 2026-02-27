const dishes = [
  'Adobo',
  'Sinigang',
  'Kare-Kare',
  'Lechon',
  'Pancit Canton',
  'Bulalo',
  'Laing',
  'Bicol Express',
  'Kaldereta',
  'Mechado',
  'Afritada',
  'Tinola',
  'Dinuguan',
  'Sisig',
  'Chicken Inasal',
  'Batchoy',
  'Pinakbet',
  'Arroz Caldo',
  'Lomi',
  'Pochero'
];

const streetFoods = [
  'Isaw',
  'Kwek-kwek',
  'Fish Ball',
  'Kikiam',
  'Betamax',
  'Adidas',
  'Proben',
  'Banana Cue',
  'Camote Cue',
  'Turon',
  'Taho',
  'Balut'
];

const desserts = [
  'Halo-Halo',
  'Leche Flan',
  'Bibingka',
  'Puto Bumbong',
  'Buko Pandan',
  'Maja Blanca',
  'Ube Halaya',
  'Sapin-Sapin',
  'Kutsinta',
  'Pichi-Pichi'
];

const randomFrom = (values) => values[Math.floor(Math.random() * values.length)];

class Foods {
  dishes() {
    return [...dishes];
  }

  streetFoods() {
    return [...streetFoods];
  }

  desserts() {
    return [...desserts];
  }

  dish() {
    return randomFrom(dishes);
  }

  streetFood() {
    return randomFrom(streetFoods);
  }

  dessert() {
    return randomFrom(desserts);
  }

  food() {
    return randomFrom([...dishes, ...streetFoods, ...desserts]);
  }
}

module.exports = Foods;

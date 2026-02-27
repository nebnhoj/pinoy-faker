const places = [
  {
    region: 'NCR',
    province: 'Metro Manila',
    city: 'Quezon City',
    barangays: ['Batasan Hills', 'Commonwealth', 'Bagumbayan', 'Ugong Norte']
  },
  {
    region: 'Region III',
    province: 'Pampanga',
    city: 'Angeles',
    barangays: ['Balibago', 'Pampang', 'Pulung Maragul', 'Cutcut']
  },
  {
    region: 'Region IV-A',
    province: 'Laguna',
    city: 'Calamba',
    barangays: ['Pansol', 'Canlubang', 'Real', 'Parian']
  },
  {
    region: 'Region VII',
    province: 'Cebu',
    city: 'Cebu City',
    barangays: ['Lahug', 'Guadalupe', 'Mabolo', 'Talamban']
  },
  {
    region: 'Region XI',
    province: 'Davao del Sur',
    city: 'Davao City',
    barangays: ['Buhangin', 'Matina', 'Bunawan', 'Toril']
  }
];

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFrom = (values) => values[randomInt(values.length)];

class Location {
  region() {
    return randomFrom(places).region;
  }

  province() {
    return randomFrom(places).province;
  }

  city() {
    return randomFrom(places).city;
  }

  barangay() {
    const place = randomFrom(places);
    return randomFrom(place.barangays);
  }

  fullAddress() {
    const place = randomFrom(places);
    return {
      region: place.region,
      province: place.province,
      city: place.city,
      barangay: randomFrom(place.barangays)
    };
  }
}

module.exports = Location;

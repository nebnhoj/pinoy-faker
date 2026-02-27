const regions = [
  'NCR',
  'CAR',
  'Region I',
  'Region II',
  'Region III',
  'Region IV-A',
  'Region IV-B',
  'Region V',
  'Region VI',
  'Region VII',
  'Region VIII',
  'Region IX',
  'Region X',
  'Region XI',
  'Region XII',
  'Region XIII',
  'BARMM'
];

const provincesByRegion = {
  NCR: ['Metro Manila'],
  CAR: ['Abra', 'Apayao', 'Benguet', 'Ifugao', 'Kalinga', 'Mountain Province'],
  'Region I': ['Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan'],
  'Region II': ['Batanes', 'Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino'],
  'Region III': ['Aurora', 'Bataan', 'Bulacan', 'Nueva Ecija', 'Pampanga', 'Tarlac', 'Zambales'],
  'Region IV-A': ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal'],
  'Region IV-B': ['Marinduque', 'Occidental Mindoro', 'Oriental Mindoro', 'Palawan', 'Romblon'],
  'Region V': ['Albay', 'Camarines Norte', 'Camarines Sur', 'Catanduanes', 'Masbate', 'Sorsogon'],
  'Region VI': ['Aklan', 'Antique', 'Capiz', 'Guimaras', 'Iloilo', 'Negros Occidental'],
  'Region VII': ['Bohol', 'Cebu', 'Negros Oriental', 'Siquijor'],
  'Region VIII': ['Biliran', 'Eastern Samar', 'Leyte', 'Northern Samar', 'Samar', 'Southern Leyte'],
  'Region IX': ['Zamboanga del Norte', 'Zamboanga del Sur', 'Zamboanga Sibugay'],
  'Region X': ['Bukidnon', 'Camiguin', 'Lanao del Norte', 'Misamis Occidental', 'Misamis Oriental'],
  'Region XI': ['Davao de Oro', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental', 'Davao Oriental'],
  'Region XII': ['Cotabato', 'Sarangani', 'South Cotabato', 'Sultan Kudarat'],
  'Region XIII': ['Agusan del Norte', 'Agusan del Sur', 'Dinagat Islands', 'Surigao del Norte', 'Surigao del Sur'],
  BARMM: ['Basilan', 'Lanao del Sur', 'Maguindanao del Norte', 'Maguindanao del Sur', 'Sulu', 'Tawi-Tawi']
};

const cityByProvince = {
  'Metro Manila': ['Manila', 'Quezon City', 'Makati', 'Taguig', 'Pasig'],
  'Ilocos Norte': ['Laoag', 'Batac'],
  'Pangasinan': ['Dagupan', 'Urdaneta', 'San Carlos'],
  Pampanga: ['Angeles', 'San Fernando', 'Mabalacat'],
  Bulacan: ['Malolos', 'Meycauayan', 'San Jose del Monte'],
  Cavite: ['Bacoor', 'Dasmariñas', 'Imus', 'Tagaytay'],
  Laguna: ['Calamba', 'San Pablo', 'Santa Rosa'],
  Batangas: ['Batangas City', 'Lipa', 'Tanauan'],
  Cebu: ['Cebu City', 'Mandaue', 'Lapu-Lapu'],
  Bohol: ['Tagbilaran'],
  Iloilo: ['Iloilo City', 'Passi'],
  'Negros Occidental': ['Bacolod', 'Bago', 'Cadiz'],
  'Negros Oriental': ['Dumaguete', 'Bais'],
  Leyte: ['Tacloban', 'Ormoc'],
  'Davao del Sur': ['Davao City', 'Digos'],
  'Davao del Norte': ['Tagum', 'Panabo'],
  'South Cotabato': ['General Santos', 'Koronadal'],
  Bukidnon: ['Malaybalay', 'Valencia'],
  'Misamis Oriental': ['Cagayan de Oro', 'El Salvador'],
  'Misamis Occidental': ['Oroquieta', 'Ozamiz', 'Tangub'],
  'Zamboanga del Sur': ['Zamboanga City', 'Pagadian'],
  'Zamboanga del Norte': ['Dipolog', 'Dapitan'],
  Palawan: ['Puerto Princesa'],
  Albay: ['Legazpi', 'Tabaco'],
  'Camarines Sur': ['Naga', 'Iriga']
};

const barangaysByCity = {
  Manila: ['Barangay 659', 'Barangay 719', 'Barangay 393', 'Barangay 305'],
  'Quezon City': ['Batasan Hills', 'Commonwealth', 'Tandang Sora', 'Bagumbayan'],
  Makati: ['Bel-Air', 'Poblacion', 'San Lorenzo', 'Urdaneta'],
  Taguig: ['Fort Bonifacio', 'Ususan', 'Pinagsama', 'Western Bicutan'],
  Pasig: ['Kapitolyo', 'Ugong', 'Santolan', 'Rosario'],
  Angeles: ['Balibago', 'Pampang', 'Pulung Maragul', 'Cutcut'],
  Calamba: ['Pansol', 'Canlubang', 'Parian', 'Real'],
  'Cebu City': ['Lahug', 'Guadalupe', 'Mabolo', 'Talamban'],
  'Davao City': ['Buhangin', 'Matina', 'Bunawan', 'Toril'],
  'Iloilo City': ['Jaro', 'Mandurriao', 'Molo', 'La Paz'],
  Bacolod: ['Mansilingan', 'Villamonte', 'Tangub', 'Banago'],
  'Cagayan de Oro': ['Carmen', 'Macabalan', 'Nazareth', 'Lapasan'],
  'General Santos': ['Bula', 'Lagao', 'Calumpang', 'City Heights'],
  'Zamboanga City': ['Tetuan', 'Putik', 'Santa Maria', 'Pasonanca'],
  'Puerto Princesa': ['Bancao-Bancao', 'San Pedro', 'Tiniguiban', 'Irawan'],
  Legazpi: ['EM\'s Barrio', 'Bitano', 'Bogtong', 'Cabangan']
};

const randomInt = (max) => Math.floor(Math.random() * max);
const randomFrom = (values) => values[randomInt(values.length)];

const dedupe = (values) => [...new Set(values)];

class Location {
  regions() {
    return [...regions];
  }

  provinces(region) {
    if (region && provincesByRegion[region]) {
      return [...provincesByRegion[region]];
    }

    return dedupe(Object.values(provincesByRegion).flat());
  }

  cities(province) {
    if (province && cityByProvince[province]) {
      return [...cityByProvince[province]];
    }

    return dedupe(Object.values(cityByProvince).flat());
  }

  barangays(city) {
    if (city && barangaysByCity[city]) {
      return [...barangaysByCity[city]];
    }

    return dedupe(Object.values(barangaysByCity).flat());
  }

  region() {
    return randomFrom(regions);
  }

  province(region) {
    const list = this.provinces(region);
    return randomFrom(list);
  }

  city(province) {
    const list = this.cities(province);
    return randomFrom(list);
  }

  barangay(city) {
    const list = this.barangays(city);
    return randomFrom(list);
  }

  fullAddress() {
    const province = this.province();
    const city = cityByProvince[province] ? this.city(province) : this.city();
    const barangay = barangaysByCity[city] ? this.barangay(city) : this.barangay();

    return {
      region: this.region(),
      province,
      city,
      barangay
    };
  }
}

module.exports = Location;

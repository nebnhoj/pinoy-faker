const randomInt = (max) => Math.floor(Math.random() * max);
const randomDigits = (length) => Array.from({ length }, () => randomInt(10)).join('');

class Government {
  tin() {
    return `${randomDigits(3)}-${randomDigits(3)}-${randomDigits(3)}-${randomDigits(3)}`;
  }

  sss() {
    return `${randomDigits(2)}-${randomDigits(7)}-${randomDigits(1)}`;
  }

  philHealth() {
    return `${randomDigits(2)}-${randomDigits(9)}-${randomDigits(1)}`;
  }

  pagIbig() {
    return `${randomDigits(4)}-${randomDigits(4)}-${randomDigits(4)}`;
  }
}

module.exports = Government;

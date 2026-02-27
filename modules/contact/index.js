const mobilePrefixes = [
  '0905', '0906', '0907', '0908', '0909',
  '0910', '0912', '0915', '0916', '0917', '0918', '0919',
  '0920', '0921', '0922', '0923', '0925', '0926', '0927', '0928', '0929',
  '0930', '0935', '0936', '0937', '0938', '0939',
  '0945', '0946', '0947', '0948', '0949',
  '0950', '0951', '0953', '0955', '0956',
  '0961', '0963', '0965', '0966', '0967', '0968', '0969',
  '0970', '0973', '0975', '0976', '0977', '0978', '0979',
  '0981', '0989', '0994', '0995', '0996', '0997', '0998', '0999'
];

const emailDomains = [
  'gmail.com',
  'yahoo.com',
  'outlook.com',
  'hotmail.com',
  'proton.me'
];

const randomInt = (max) => Math.floor(Math.random() * max);
const randomDigits = (length) => Array.from({ length }, () => randomInt(10)).join('');
const randomFrom = (values) => values[randomInt(values.length)];

class Contact {
  mobileNumber() {
    return `${randomFrom(mobilePrefixes)}${randomDigits(7)}`;
  }

  landlineNumber(areaCode = '02') {
    const normalizedAreaCode = String(areaCode).replace(/[^\d]/g, '') || '02';
    return `${normalizedAreaCode}-${randomDigits(7)}`;
  }

  emailAddress(name = 'juan.dela.cruz') {
    const safeName = String(name)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, '.');

    return `${safeName || 'pinoy.user'}@${randomFrom(emailDomains)}`;
  }
}

module.exports = Contact;

class Card {
  constructor(name, power, img) {
    this.name = name;
    this.power = power;
    this.img = img;
  }
}

const sixC = new Card('sixC', 1, '6_c');
const sixD = new Card('sixD', 1, '6_d');
const sixH = new Card('sixH', 1, '6_h');
const sixS = new Card('sixS', 1, '6_s');

const sevenC = new Card('sevenC', 2, '7_c');
const sevenD = new Card('sevenD', 2, '7_d');
const sevenH = new Card('sevenH', 2, '7_h');
const sevenS = new Card('sevenS', 2, '7_s');

const eightC = new Card('eightC', 3, '8_c');
const eightD = new Card('eightD', 3, '8_d');
const eightH = new Card('eightH', 3, '8_h');
const eightS = new Card('eightS', 3, '8_s');

const nineC = new Card('nineC', 4, '9_c');
const nineD = new Card('nineD', 4, '9_d');
const nineH = new Card('nineH', 4, '9_h');
const nineS = new Card('nineS', 4, '9_s');

const tenC = new Card('tenC', 5, '10_c');
const tenD = new Card('tenD', 5, '10_d');
const tenH = new Card('tenH', 5, '10_h');
const tenS = new Card('tenS', 5, '10_s');

const jackC = new Card('jackC', 6, 'J_c');
const jackD = new Card('jackD', 6, 'J_d');
const jackH = new Card('jackH', 6, 'J_h');
const jackS = new Card('jackS', 6, 'J_s');

const queenC = new Card('queenC', 7, 'Q_c');
const queenD = new Card('queenD', 7, 'Q_d');
const queenH = new Card('queenH', 7, 'Q_h');
const queenS = new Card('queenS', 7, 'Q_s');

const kingC = new Card('kingC', 8, 'K_c');
const kingD = new Card('kingD', 8, 'K_d');
const kingH = new Card('kingH', 8, 'K_h');
const kingS = new Card('kingS', 8, 'K_s');

const aC = new Card('aC', 9, 'A_c');
const aD = new Card('aD', 9, 'A_d');
const aH = new Card('aH', 9, 'A_h');
const aS = new Card('aS', 9, 'A_s');

export const generalDeckOfCards = [
  sixC,
  sixD,
  sixH,
  sixS,
  sevenC,
  sevenD,
  sevenH,
  sevenS,
  eightC,
  eightD,
  eightH,
  eightS,
  nineC,
  nineD,
  nineH,
  nineS,
  tenC,
  tenD,
  tenH,
  tenS,
  jackC,
  jackD,
  jackH,
  jackS,
  queenC,
  queenD,
  queenH,
  queenS,
  kingC,
  kingD,
  kingH,
  kingS,
  aC,
  aD,
  aH,
  aS,
];

// export let shuffledDeck = shuffleArray(generalDeckOfCards);

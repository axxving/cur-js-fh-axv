/*  2C = Dos de treboles
    2D = Dos de diamantes
    2H = Dos de corazones
    2S = Dos de espadas
*/

let deck = [];

let tipos = ["C", "D", "H", "S"];

let especiales = ["A", "J", "Q", "K"];

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }

  console.log(deck);
  deck = _.shuffle(deck);
  console.log(deck);

  return deck;
};

crearDeck();

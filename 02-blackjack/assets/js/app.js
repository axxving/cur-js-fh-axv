/*  2C = Dos de treboles
    2D = Dos de diamantes
    2H = Dos de corazones
    2S = Dos de espadas
*/

let deck = [];

let tipos = ["C", "D", "H", "S"];

let especiales = ["A", "J", "Q", "K"];

/* Esta funcion genera un nuevo deck */
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

  deck = _.shuffle(deck);
  console.log(deck);

  return deck;
};

crearDeck();

/* Esta funcion me permite tomar una carta */
const pedirCarta = () => {
  // Evitar que se sigan pidiendo cartas si ya no hay en el deck
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();

  console.log({ carta, deck });

  return carta;
};

pedirCarta();


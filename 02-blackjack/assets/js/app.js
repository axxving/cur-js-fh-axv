let deck = [];
let tipos = ["C", "D", "H", "S"];
let especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias de html
const btnPedir = document.querySelector("#btnPedir");

// puntos de jugaodr
const puntosHTML = document.querySelectorAll('small');

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

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

crearDeck();

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  console.log(puntosJugador);
  puntosHTML[0].innerText = puntosJugador;

  
});


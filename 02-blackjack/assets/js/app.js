let deck = [];
let tipos = ["C", "D", "H", "S"];
let especiales = ["A", "J", "Q", "K"];
let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias de html
const btnPedir = document.querySelector("#btnPedir");

// Boton para detener el juego
const btnDetener = document.querySelector("#btnDetener");

// Boton de nuevo juego
const btnNuevo = document.querySelector("#btnNuevo");

// Cartas del jugador
const divCartasJugador = document.querySelector("#jugador-cartas");

// Cartas de la computadora
const divCartasComputadora = document.querySelector("#computadora-cartas");

// puntos de jugaodr
const puntosHTML = document.querySelectorAll("small");

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

// Turno de la computadora
const turnoComputadora = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML[1].innerText = puntosComputadora;

    // Generando la imagen
    const imgCarta = document.createElement("img");
    // Agregando la ruta
    imgCarta.src = `./assets/cartas/${carta}.png`;
    // Agregando la clase
    imgCarta.classList = "carta mt-3";
    // Insertando la carta
    divCartasComputadora.append(imgCarta);
    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    // Alert para avisar al ganador
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana");
    } else if (puntosMinimos > 21) {
      alert("La computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador gana");
    } else {
      alert("Computadora gana");
    }
  }, 100);
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  puntosHTML[0].innerText = puntosJugador;

  // Generando la imagen
  const imgCarta = document.createElement("img");
  // Agregando la ruta
  imgCarta.src = `./assets/cartas/${carta}.png`;
  // Agregando la clase
  imgCarta.classList = "carta mt-3";
  // Insertando la carta
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  } else if (puntosJugador === 21) {
    console.log("21, genial");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  }
});

// Detener
const detenerJuego = () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugador);
};

btnDetener.addEventListener("click", () => {
  detenerJuego();
});

// Nuevo juego
btnNuevo.addEventListener("click", () => {
  btnPedir.disabled = false;
  btnDetener.disabled = false;
  puntosJugador = 0;
  puntosComputadora = 0;
  puntosHTML[0].innerText = 0;
  puntosHTML[1].innerText = 0;
  divCartasJugador.innerHTML = "";
  divCartasComputadora.innerHTML = "";
  deck = [];
  deck = crearDeck();
});

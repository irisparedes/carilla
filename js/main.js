'use strict';

// [X] Necesito los elementos html (contenedor de la cara, el select y el botón)

// [RESUMEN] Yo selecciono un estado y cuando pulso en Actualizar se me pinta el estado en la página y además se elige un número aleatorio hasta 100 y si es par se pone un fondo y si no lo es se pone otro.

// Guión!
// [X] Referencia a los elementos con los que voy a trabajar
const app = document.querySelector('body');
const mood = document.querySelector('.mood');
const moodSelector = document.querySelector('#moodSelector');
const btn = document.querySelector('.btn');

// [X] Creo la función del listener
const writeMood = () => {
  // - [X] Recoge el estado del select y lo pinta en pantalla
  mood.innerHTML = moodSelector.value;
  // - [] Genera un número aleatorio
  // - [] Si es par pone amarillo correcto
  // - [] Si es impar pone fuego chileno
};

// [X] Listener al botón
btn.addEventListener('click', writeMood);

// Lo último: el diseño
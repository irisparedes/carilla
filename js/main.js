'use strict';

const app = document.querySelector('body');
const mood = document.querySelector('.mood');
const moodSelector = document.querySelector('#moodSelector');
const btn = document.querySelector('.btn');

// Funcion de número aleatorio
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

// Funcion pintacarita
const writeCarilla = newMood => mood.innerHTML = newMood;

// Función que elige el fondo
const chooseBG = (number) => {
  if (number%2 === 0) {
    app.classList.remove('fuego-chileno');
  } else {
    app.classList.add('fuego-chileno');
  }
};

// Función del listener
const writeMood = () => {
  writeCarilla(moodSelector.value);
  const myRandomNumber = getRandomInt(100);
  chooseBG(myRandomNumber);
};

writeCarilla(moodSelector.value);
btn.addEventListener('click', writeMood);

// Guión de mejoras
// - [X] Que se pinte la cara que hay seleccionada por defecto al inicio
// - [X] Hacer alguna función más
// ---
// - [ ] HTML
// - [ ] Añadir los estilos
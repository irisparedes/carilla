'use strict';

const app = document.querySelector('.app');
const mood = document.querySelector('.app__mood');
const moodSelector = document.querySelector('#moodSelector');
const btn = document.querySelector('.app__btn');

// Funcion de número aleatorio
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

// Funcion pintacarita
const writeCarilla = newMood => mood.innerHTML = newMood;

// Función que elige el fondo
const chooseBG = (number) => {
  if (number%2 === 0) {
    app.classList.remove('app--fuego-chileno');
  } else {
    app.classList.add('app--fuego-chileno');
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
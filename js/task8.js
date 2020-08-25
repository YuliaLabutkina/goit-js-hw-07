"use strict";

const input = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('div#boxes');
let r = 0;
let g = 0;
let b = 0;


function createBox(size) {
  const element = document.createElement('div');
  element.setAttribute("style", `width: ${size}px; height: ${size}px; background-color: ${getRgb()};`);
  return element;
};


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


function getRgb() {
  r = getRandomIntInclusive(0, 255);
  g = getRandomIntInclusive(0, 255);
  b = getRandomIntInclusive(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};


function createBoxes(amount) {

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const div = createBox(size);
    fragment.appendChild(div);
  }

  boxes.appendChild(fragment);
};


const createBoxesList = () => {
  const amount = Number(input.value);
  createBoxes(amount);
};


const destroyBoxes = () => {
  boxes.innerHTML = "";
};


render.addEventListener("click", createBoxesList);
destroy.addEventListener('click', destroyBoxes);
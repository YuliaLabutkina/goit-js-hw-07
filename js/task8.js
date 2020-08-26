"use strict";

const input = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('div#boxes');


function createBox(size) {
  const element = document.createElement('div');
  element.setAttribute("style", `width: ${size}px; height: ${size}px; background-color: ${getRgb()};`);
  return element;
};


function getRgb() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
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
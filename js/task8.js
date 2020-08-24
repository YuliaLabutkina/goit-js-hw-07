"use strict";

const input = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('div#boxes');
const boxRender = document.querySelectorAll('div#boxes div');

const createBoxes = (amount) => {
console.log(input.value);
}

const destroyBoxes = () => boxRender.forEach(el => boxes.removeChild(el));


render.addEventListener('click', createBoxes(input.value));
destroy.addEventListener('click', destroyBoxes);
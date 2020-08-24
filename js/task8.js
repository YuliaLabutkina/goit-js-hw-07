"use strict";

const input = document.querySelector('input[type="number"]');
const render = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('div#boxes');
const boxRender = document.querySelectorAll('div#boxes div');
let width = 30;
let height = 30;
let a = 0;
let b = 0;
let c = 0;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }


const createBoxes = (amount) => {

    for (let i = 0; i < amount; i += 1) {
        const element = document.createElement('div');
        a = getRandomIntInclusive(0, 255);
        b = getRandomIntInclusive(0, 255);
        c = getRandomIntInclusive(0, 255);
        element.setAttribute("style", `width: ${width}px; height: ${height}px; background-color: rgb(${a}, ${b}, ${c});`);
        boxes.appendChild(element);
        width += 10;
        height += 10;
    }

}

const destroyBoxes = () => {
    const boxRender = document.querySelectorAll("div#boxes div");
    boxRender.forEach((el) => boxes.removeChild(el));
  };
  

render.addEventListener("click", () => {
    createBoxes(input.value);
  });

destroy.addEventListener('click', destroyBoxes);
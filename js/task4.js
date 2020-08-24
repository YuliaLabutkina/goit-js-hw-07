"use strict";

const counter = document.querySelector('#value');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    return counter.innerHTML = counterValue;
};

const decrement = () => {

    if(counterValue > 0) {
        counterValue -= 1;
        return counter.innerHTML = counterValue;
    }
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
"use strict";

const input = document.querySelector('input#validation-input');

const validationInput = () => {

    if(input.value.length === +input.dataset.length) {
       input.classList.add("valid");
       input.classList.remove("invalid");
    } 
    
    if(input.value.length !== +input.dataset.length) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    
}

input.addEventListener('blur', validationInput);
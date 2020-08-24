"use strict";

const inputFontSize = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');
let size = 16;
text.setAttribute("style", `font-size: ${size}px`);



const fontSizeChange = () => {

    if(inputFontSize.value > 50) {
        size = 20;
        text.setAttribute("style", `font-size: ${size}px`);
    }

    if(inputFontSize.value < 50) {
        size = 10;
        text.setAttribute("style", `font-size: ${size}px`);
    }
    
}

inputFontSize.addEventListener('input', fontSizeChange);
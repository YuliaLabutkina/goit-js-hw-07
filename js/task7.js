"use strict";

const inputFontSize = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

const fontSizeChange = (e) => {
    text.style.fontSize = `${e.target.value}px`;
}

inputFontSize.addEventListener("input", fontSizeChange);
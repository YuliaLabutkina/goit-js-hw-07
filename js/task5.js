"use strict";

const enterYourName = document.querySelector('input#name-input');
const userName = document.querySelector('span#name-output');

const addUserName = () => enterYourName.value.length > 0 ? userName.innerHTML = enterYourName.value : userName.innerHTML= 'незнакомец';

enterYourName.addEventListener('input', addUserName);
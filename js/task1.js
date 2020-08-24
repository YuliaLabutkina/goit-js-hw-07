"use strict";

console.group(`Task-1`);
const numberCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberCategories.length} категории`);

const categories = numberCategories => numberCategories.forEach(el => {
    console.log(`
    Категория: ${el.querySelector('h2').textContent}
    Количество элементов: ${el.querySelectorAll('li').length}
    `);
});

categories(numberCategories);
console.groupEnd();

// const categories = numberCategories => numberCategories.forEach( el => {

// const titles = el.querySelector('h2');
// const elements = el.querySelectorAll('li');

//     console.log(`
//     Категория: ${titles.textContent}
//     Количество элементов: ${elements.length}
//     `);

// });

// categories(numberCategories);
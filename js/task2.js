"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listVegetables = document.querySelector('#ingredients');
  const fragment = document.createDocumentFragment();

  const ingredientsList = ingredients.forEach(el => {
    const list = document.createElement('li');
    list.textContent = el;
    fragment.appendChild(list);
  });

  listVegetables.appendChild(fragment);


  // const ingredientsList = ingredients.map(el => {
  //   const list = document.createElement('li');
  //   list.textContent = el;
  //   return list;
  // });
  
  // listVegetables.append(...ingredientsList);
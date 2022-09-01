const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const conteinerEl = document.querySelector('ul');
conteinerEl.textContent = 'ingredients'

const elements = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item')
  return listEl;
})

console.log(elements);
conteinerEl.append(...elements);

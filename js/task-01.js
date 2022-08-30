const categoriesEl = document.querySelectorAll(`.item ul`);
console.log('Number of categories:', categoriesEl.length);

const titleEl = document.querySelectorAll(`h2`);
const listEl = document.querySelectorAll(`.item ul`)
const animalsEl = listEl[0].querySelectorAll(`li`);
const productsEl = listEl[1].querySelectorAll(`li`);
const technologiesEl = listEl[2].querySelectorAll(`li`);

console.log('Category:', titleEl[0].textContent);
console.log('Elements:', animalsEl.length);

console.log('Category:', titleEl[1].textContent);
console.log('Elements:', productsEl.length);

console.log('Category:', titleEl[2].textContent);
console.log('Elements:', technologiesEl.length);

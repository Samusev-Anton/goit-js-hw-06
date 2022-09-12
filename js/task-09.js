function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
// console.log(bodyColor);
const textSpan = document.querySelector('.color');
// console.log(textSpan);
const btnChangeColor = document.querySelector('.change-color');
// console.log(btnChangeColor);


btnChangeColor.addEventListener('click', onBtnChangeColor);

function onBtnChangeColor() {
  const color = getRandomHexColor();
  console.log(color);

  bodyColor.style.backgroundColor = color;
  textSpan.textContent = color;
}



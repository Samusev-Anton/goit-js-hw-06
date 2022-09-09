const refs =  {
    inputRange: document.getElementById('font-size-control'),
    textEl: document.getElementById('text')
}
refs.inputRange.value = 16;

// console.log(refs.inputRange);
// console.log(refs.textEl);

refs.inputRange.addEventListener('input', onInputRange);


function onInputRange(event) {
    console.log(event.currentTarget.value);
    refs.textEl.style.fontSize = refs.inputRange.value + 'px';
}
const input = document.querySelector('#input');
let display = document.getElementById('display');

function keyFinder(e){
    // const key = e.code;
    // display.textContent += key;
    // display.textContent += `${e.code}`
    // display.value = `${e.code}`
    display.value += ` ${e.code}`
}

input.addEventListener('keypress', keyFinder);
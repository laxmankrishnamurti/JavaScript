const body = document.querySelector('body');

body.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'circle');
    body.appendChild(newDiv);
})
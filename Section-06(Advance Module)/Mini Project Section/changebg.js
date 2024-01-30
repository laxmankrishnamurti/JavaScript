const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.body;

let change;

const randonColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
}

const changeBgColor = function() {
        if(!change){            //or change === null
            change = setInterval(() => {
                body.style.backgroundColor = randonColor();
                console.log(randonColor()); 
            }, 1000);
        }
} 

start.addEventListener('click', changeBgColor);

stop.addEventListener('click', () => {
    clearInterval(change);
    change = null;
})
/**
 * Lexical Scope :: It is all about Scoping. Where we have leaned that parent function can't access child scope but child functions can access the parent scope. This is called Closures.
 */

/**
 * Note :: When a parent function is returning a child function then it dosen't mean that only the child function is returning but also it's whole lexical scope will return.
 */

function parent(){
    let name = 'Laxman Krishnamurti';
    function child(){
        console.log(name);
    }

    return child;
}

let receive = parent();
receive();                  //Output :: Laxman krishnamurti

//Real world Scenario

const btn = document.querySelector('#click-me');

function handler(color){
    return function(){
        document.body.style.backgroundColor = `${color}`;
    }
}
btn.onclick = handler('blue')
const title = document.getElementById('main-heading');
const body = document.querySelector('body');

function changeText() {
    title.innerText = 'Asynchronous JavaScript'
}

const change = setTimeout(changeText, 2000);

function stop() {
    clearTimeout(change, 1000);
}
stop()


/***********************************************************************************************************************/

const description = document.getElementById('description');


const set = setInterval(() => {
    console.log('Set Interval Successfully executed!!!')
}, 1000);

function clear() {
    clearInterval(set, 1000);
}
clear();

/************************************************************************************************************************/

const key = document.getElementById('keyValue');
const userInput = document.getElementById('inputValue');

userInput.addEventListener('keydown', (e) => {
    key.innerText = e.key;
})

/************************************************************************************************************************/

//API Request via XML

//For using XML Request, first of all we hava to create a new "xmlHttpRequest" after that we can use it's other methods and properties. Here we go...............

const url = 'https://api.github.com/users/laxmankrishnamurti';
const request = new XMLHttpRequest();
request.open('GET', url);
request.send();
let user = {};

//Extract the user using function.

const userInfo = function (user) {
    return 'hello';
}

//Traking The Request continuously.

request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            //Parsing the response into JSON 
            const userData = JSON.parse(request.responseText);

            //Assigning the value into user object.

            user.name = userData.name;
            user.login = userData.login;
            user.location = userData.location;
            user.avatarURL = userData.avatar_url;
            user.bio = userData.bio;
            user.followers = userData.followers;
            user.apiURL = userData.url;

            userInfo(user);
        } else {
            console.log('Err' + request.status);
        }
    }
}



console.log(userInfo());
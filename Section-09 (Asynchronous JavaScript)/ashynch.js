const title = document.getElementById('main-heading');
const body = document.querySelector('body');

function changeText() {
    // title.innerText = 'Asynchronous JavaScript'
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

//Extract the user using function.

const userInfo = function (user) {
    myName(user.name, user.location, user.bio, user.followers);
}

function myName(name, location, bio, followers) {
    console.table(name, location, bio, followers);
}

//PENDING :- Can we extract the "user" like a Global Object from the XHR Request?

/**************************************************************************************************************************/

//PROMISES

const container = document.getElementById('container');

const changeColor = function () {
    return new Promise((resolve, reject) => {
        let userStatus = true;
        if (userStatus) {
            setTimeout(() => {
                container.style.backgroundColor = 'red';
                resolve();
            }, 1000);
        } else {
            setTimeout(() => {
                reject('Err : Something went wrong!!!');
            }, 1000)
        }
    })
}
changeColor()
    .then(() => {
        console.log('Background-color changed successfully')
    })
    .catch((err) => {
        console.log(err);
    })


//Let's divide the task into multiple promises.

const extraStyle = function () {
    return new Promise((resolve, reject) => {
        let userStatus = true;
        if (userStatus) {
            setTimeout(() => {
                container.style.borderRadius = '0.5rem';
                container.style.transition = 'all 1s ease';
                resolve();
            }, 2000);
        } else {
            setTimeout(() => {
                reject('Err : Something went wrong!!!');
            }, 2000)
        }
    })
}

extraStyle()

    .then(() => {
        console.log('Border-Radius and Transition completed.');
    })
    .catch((err) => {
        console.log(err);
    })

const translate = function () {
    return new Promise((resolve, reject) => {
        let userStatus = true;
        if (userStatus) {
            setTimeout(() => {
                container.style.translate = '100px'
                container.style.scale = '1.5';
                resolve();
            }, 5000);
        } else {
            setTimeout(() => {
                reject('Err : Something went wrong!!!');
            }, 3000)
        }
    })
}

translate()

    .then(() => {
        console.log('Translate and Scale Completed.');
    })
    .catch((err) => {
        console.log(err);
    })

/****************************************************************************************************************************/
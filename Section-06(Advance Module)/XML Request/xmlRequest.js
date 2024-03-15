/**
 * What is API?
 * 
 * ans :- An API(Application program interface) is just a way of communication between two system which can be written in different-different language.
 * 
 * Before using "fetch" method we used "XMLHTTPREQUEST" to get the data from backend. The "XMLHttpRequest.readyState" property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states.
 * 
 *          Value           State                   Description
 *            0             UNSENT                  Client has been created. open() not called yet.
 *            1             OPENED                  open() has been called.
 *            2             HEADERS RECEIVED        sent() has been called, and header and status are available.
 *            3             LOADING                 Downloading: responseText holds partial data.
 *            4             DONE                    The operation is complete.
 * 
 * XML Request in JavaScript called AJAX.
 */

/**
 * What is the uses "new" keyword?
 * 
 * ans :- The "new" keyword is used to create new instence of an object or a function, JavaScript called Constructor method.
 * 
 * What is Built-in-Object?
 * 
 * ans :- Built-in-object means Global Objects. It refers to object in the Global scope. It has multiple division like:- Value Property, Function Property, Fundamental Object, Error Object, Number and Date, Indexed Collection.....etc
 */

/**
 * What are methods in JS?
 * 
 * ans :- JavaScript methods are action that can performed on objects. A JavaScript method is a property containing a function definition.
 */

//XHR REQUEST

// let username;
// let avatar;
// let followers;
// let following;

const profile = document.querySelector('#logo');
const img = document.createElement('img');
img.setAttribute('src', 'https://avatars.githubusercontent.com/u/147559042?v=4');
profile.appendChild(img);

const userid = document.querySelector('#username');
const follower = document.querySelector('#followers');
const follow = document.querySelector('#following');


const requestURL = 'https://api.github.com/users/laxmankrishnamurti';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);        //GET :: Requesting method,   requesURL :: From where the data comes.
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // console.log(this.responseText);
        const data = JSON.parse(this.responseText);
        console.log(data);
        let username = data.login;
        userid.innerHTML = username;
        // let avatar = data.avatar_url;
        let followers = data.followers;
        follower.innerHTML = `Followers : ${followers}`
        let following = data.following;
        follow.innerHTML = `Following : ${following}`;

        return data;
    }
}

xhr.send();
// I can't extract the data outside from if-block. 


// MDN Example of the XHRRequest 

// const xhr = new XMLHttpRequest();
// const method = "GET";
// const url = "https://developer.mozilla.org/";

// xhr.open(method, url, true);
// xhr.onreadystatechange = () => {
//   // In local files, status is 0 upon success in Mozilla Firefox
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const status = xhr.status;
//     if (status === 0 || (status >= 200 && status < 400)) {
//       // The request has been completed successfully
//       console.log(xhr.responseText);
//     } else {
//       // Oh no! There has been an error with the request!
//     }
//   }
// };
// xhr.send();

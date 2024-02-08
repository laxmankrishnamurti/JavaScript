//fetch API is very important when we talk about Asynchronous programming. Fetching means we receive something from the given API. We can say that "fetch api" is successor to "XMLHttpRequest". It is a "Network based Request" and it returns a "Promise" when the response is available.

//A fetch promise only rejects when a network is encountered(when there is a permission issue or similar). A fetch Promise dosen't reject on HTTP errors(404, eetc).


fetch('https://api.github.com/users/laxmankrishnamurti')
.then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(username);
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

/**
 * Response {type: 'cors', url: 'https://api.github.com/users/laxmankrishnamurti', redirected: false, status: 200, ok: true, …}
 * laxmankrishnamurti
 * {login: 'laxmankrishnamurti', id: 147559042, node_id: 'U_kgDOCMuSgg', avatar_url: 'https://avatars.githubusercontent.com/u/147559042?v=4', gravatar_id: '', …}
 */

//Now, the question is how "fetch API" work under the hood? Let's understand..........

//As we know fetch return a "Promise".

// Step-01 :: When we request something through 'fetch' then two things happnen. (1)Memory creation for the end value (for both "resolve" and "reject") (2)Network Call 

// Step-02 :: (either it will "resolve" or "reject" the value is going to stored in the creation memory.)

// Step-03 :: After that we access the value through "then & catch" method.
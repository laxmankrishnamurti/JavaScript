/**
 * 
 What are Events?

 ans :- Before going to deep dive into events let's understand what type of programming language JavaScript is? So, JavaScript is a Synchronous programming language that means the execution of a program start from line-by-line. Once a task is completed then the further task is going to be execute. So, what is events?

            :: Events are the action which is performed by the user. Like: click, submit, hover......etc. These all are called events which is done by the user who interact with the UI of the Website. There are many events in JavaScript and because of Synchronous nature of JavaScript events are also be executed line-by-line.

    Every events have required three input arguments. These are :- (1) Event Name   (2) Callback Function   (3) Event Progation

    Event Propagation : Describe how the Browser handles events targeted at nested elements. In Event Propagation there are two important division called "Event Bubbling" and "Event Capturing"
 */

//let's apply a event on whole image-container.

const imgContainer = document.querySelector('#image-container');
// console.log(imgContainer);

// imgContainer.addEventListener('click', () => {
//     console.log('container clicked!');              //Output : container clicked!
// })

//We have disscussed about Event Propagation but we think where it is in the event? Yes, It exist in the event but it is hidden bydefault. It looks like this :- 

imgContainer.addEventListener('click', () => {
    console.log('Container CLicked!!!');        //Output : Container Clicked!!!
}, false)

//We will understand Event Propagation at that when we apply the event on it's child. Let's try to understand. Hava a look on this:- 

//let's select first image of the image-container

// const first = document.querySelector('#one');
// first.addEventListener('click', () => {
//     console.log('First image clicked!!!');
// }, false)

//Keep the important point in the mind that we have a parnet container and a child and we appllied an events on both. So, think about what happen when we click on the first image of the parent container? Do Parent event will fire or Child event will fire? Let's understand it.......I'm going to click the first one.

/**
 * Output :: 
 *              First image clicked!!!
 *              Container clicked!!!
 */

//This is happen because of Event Propogation. The bydefault event code is called Event Bubbling that means the child event will captured first then then it moves towards Parnet events. 

/**
 * false :: Event Bubbling      (From Child Event to Parent Event)
 * true :: Event Capturing      (From Parent Event to Child Event)
 */

//let's make a change into the parent event code

// imgContainer.addEventListener('click', () => {
//     console.log('Parent Container clicked!!!')
// }, true)

/**
 * Output ::    
 *              Parent Container clicked!!!
 *              First image Clicked!!!
 */

//can we prevent the Event Bubbling effect.         ans :- Yes

const first = document.querySelector('#one');
first.addEventListener('click', (eventObject) => {
    eventObject.stopPropagation();
    console.log('First image clicked!!!');
}, false)

//Output :: First image clicked!!!

//Now, at this point we applied both event but we are getting single output and that is of Child Event because of we used "stopPropagation()" method it prevent Event Bubbling Event.


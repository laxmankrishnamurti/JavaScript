// const child = document.querySelectorAll('.child');
// console.log(child)          //Collection of child in Nodelist

// const allChild = Array.from(child);
// console.log(allChild[0])            //Converting into an array
// for(let key of allChild){
//     key.addEventListener('click', () => {
//         key.style.backgroundColor = 'red'
//     })
// }

//This is fine when we have just simple task as we done in their style property. But, think about the scenario when we want to add some text and some other different task that we have to do.......... So, because of this we can't do that, so we have to slect one-by-one child and then make it Dynamic. Let's go...........

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const ten = document.querySelector('.ten');

function changeText(element, text, color, time, onSuccess, onFailure){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccess){
                onSuccess();
            }
        }else{
            if(onFailure){
                onFailure();
            }
        }
    }, time);
}

// changeText(one, 'One', 'salmon', 1000, () => {
//     console.log('Success');
// }), () => {
//     console.log('fail');
// }

//we successfully executed and manipullated. But, wait a 1 sec do we need to give the argument one-by-one. Think about the code structure and the Violation of "DON'T REPEAT YOURSELF" and code become Bulky and Unmanagable.

// changeText(one, 'One', 'white', 1000, () => {
//     changeText(two, 'Two', 'white', 2000, () => {
//         changeText(three, 'Three', 'white', 1000, () => {
//             changeText(four, 'Four', 'white', 2000, () => {
//                 changeText(five, 'Five', 'white', 1000, () => {
//                     changeText(six, 'Six', 'white', 2000, () => {
//                         changeText(seven, 'Seven', 'white', 1000, () => {
//                             changeText(eight, 'Eight', 'white', 2000, () => {
//                                 changeText(nine, 'Nine', 'white', 1000, () => {
//                                     changeText(ten, 'Ten', 'white', 2000, () => {
// PYRAMID OF DOM || CALLBACK HELL....................................................................
//                                     }, () => {console.log(`Input element dosen't exist`)})
//                                 }, () => {console.log(`Input element dosen't exist`)})
//                             }, () => {console.log(`Input element dosen't exist`)})
//                         }, () => {console.log(`Input element dosen't exist`)})
//                     }, () => {console.log(`Input element dosen't exist`)})
//                 }, () => {console.log(`Input element dosen't exist`)})
//             }, () => {console.log(`Input element dosen't exist`)})
//         }, () => {console.log(`Input element dosen't exist`)})
//     }, () => {console.log(`Input element dosen't exist`)})
// }, () => {console.log(`Input element dosen't exist`)})

const collectChild = document.querySelectorAll('.child');
const childGroup = Array.from(collectChild);


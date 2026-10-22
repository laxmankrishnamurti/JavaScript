// the story begin with var, let and const

var a = 1;
let b = 2;
const c = 3;

console.log(`a: ${a}`);
console.log(`b: ${b}`);
console.log(`c: ${c}`);

// {} : is scope

if(true){
    const d = 5;
    var e = 6;
}

// console.log(`d: ${d}`); // ReferenceError: d is not defined
console.log(`e: ${e}`); // should not be accessable

// beyond {} the variable which we deinfe is in global scope and accessable anywhere in the program.
// but, inside the {} all variables would be considered as function or lexical scope and it would only accessible inside the {}
// It works same in nested {}
// {}, is scope.
// inside {}; called as function or lexical scope
// outside {}; called as global scope

// scope is like preventing variable's leakage.
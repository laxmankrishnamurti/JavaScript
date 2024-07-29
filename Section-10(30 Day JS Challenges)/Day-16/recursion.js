/**
 * Activity
 */

//Task - 01

function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log("Factorial of 5 is : ", factorial(5))

//Task - 02 

//How do we normally calculate the fibonacci number
function calculateFibonacci(n) {
    let first = 0
    let second = 1
    let nexFibo;
    for (let i = 3; i <= n; i++) {
        nexFibo = first + second;
        first = second
        second = nexFibo
    }
    return nexFibo
}

console.log(`5th fibonacchi number is : ${calculateFibonacci(5)}`)

function calculateNthFibonacciNumber(n) {
    if (n === 0 | n === 1) {
        return n
    }
    return calculateNthFibonacciNumber(n - 1) + calculateNthFibonacciNumber(n - 2)
}

let positionOfFibonacci = 6
console.log(`${positionOfFibonacci} nth fibonacci number is : `, calculateFibonacci(positionOfFibonacci))

/**
 * Activity - 02
 */

//Task - 03

function getSumOfArray(n) {
    let arr = n
    return getSumOfArray(arr[arr.length - 1]) + getSumOfArray(arr[arr.length - 2])
}

console.log("sum of array is : ", getSumOfArray([1, 2, 3]))
# **`Execution Context`**

- 1st thing first: JS makes **Global Execution Context** -> refered by `this`
    - In Node.js => Empty Object
    - In Window => Window Object (capture browser events)

- 2nd thing: Function Execution Context
- 3rd thing: Eval Execution Context (property of a global object)

## **`Execution Phase`**

- Memory Creation Phase (or Creation Phase) => Memory allocation phase in this phase

```js
let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

- 1st Cycle (Global Execution Phase)
    - Memory Allocation Phase
        - val1 -> undefined
        - val2 -> undefined
        - addNum -> function defination
        - result1 -> undefined
        - result2 -> undefined

- 2nd Phase (Execution Phase)
    - 2nd Cycle
        - val1 -> 10
        - val2 -> 5 
        - result1 -> Initiate new executional context (new variable environment/sandbox + execution thread)
            - 1st cycle (memory allocation phase)
                - val1 -> undefined
                - val2 -> undefined
                - total -> undefined
            - 2nd cycle (initialization phase)
                - val1 = 10
                - val2 = 5
                - total = 15
            
            **context deleted**
        - result2 -> Initiate new executional context (new variable environment/sandbox + execution thread)
            - 1st cycle (memory allocation phase)
                - val1 -> undefined
                - val2 -> undefined
                - total -> undefined
            - 2nd cycle (initialization phase)
                - val1 = 10
                - val2 = 2
                - total = 12
            
            **context deleted**

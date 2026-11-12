# **`Asynchronous Working In JavaScript`**

## JavaScript (default)
  - Synchronous
  - Single Threaded

## Execution Context
  - Execute one line of code at a time.
  - Each operation waits for the last one to complete before executing.

## Blocking Code VS Non-Blocking Code

1. **Blocking Code**
  - Block the flow of program
    - Ex: Read File Sync

2. **Non-Blocking Code**
  - Does not block execution
    - Ex: Read File Async

Nothing is _the best_ it depends on the use case.

## EXECUTION MAP

**JavaScript Engine**
  - Heap Memory
  - Call Stack

**WEB API**

  - DOM API
  - High Priority Queue (promises)
  - Task Queue

**Map**

_default_
  - Call Stack
  - Global Execution Context
  - Memory Allocation
  - Functional Execution Context
  - ..............nth

_async_

Ex: setTimeOut()

  - WEB API
    - Register Callback (at the event it had occured)
    - Entry in Task Queue ()
    - Task Queue adds that task into the Call Stack

fetch (High Priority Queue)
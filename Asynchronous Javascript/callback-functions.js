// callback functions are essentially the functions that are called after a asynchronous javascript event is completed and they add these funcitons to the callback queue 

// also can be said as a function that returns a funcion in some manner

// here's how you basically write a function for that

function callbackfn(name){
    return function(){
        console.log(name)
    }
    // this is how it works, it returns a function
    // not abiding to it will return an undefined error as the set timeout wants a function as an argument
}
var time = 2000
setTimeout(callbackfn("Umang"),time);


// The event loop monitors the call stack and callback queue. The callback queue is populated via the environment (the web browser) with callback functions of ended events. The event loop:

// Checks if the call stack is empty.

// Checks if there are functions in the callback queue.

// Moves a function from the callback queue to the call stack only when the call stack is empty.

// Having an empty call stack doesn’t mean the program ends. The program ends only when all events are ended with an empty call stack and empty callback queue.
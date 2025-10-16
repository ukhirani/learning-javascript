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
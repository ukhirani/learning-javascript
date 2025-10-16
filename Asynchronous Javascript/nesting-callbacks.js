const fs = require('fs'); // import fs module
// set time out for 5 seconds
setTimeout(function(){
    console.log('five seconds complete');
}, 5000); // 5000ms = 5 seconds

// read file
fs.readFile('./Reading Files/sample.txt', 'utf8', function(err, data){
    if(err === null){ // error check
        console.log('File content:');
        console.log(data);  // print file data
    } else{
        console.log('error reading file'); // error so print this
    }
})

console.log('all functions called'); // print after calling all function



// node nesting-callbacks.js 

/*

all functions called
File content:
The quick brown fox ran over the lazy dog.
five seconds complete

*/


// Despite calling fs.readFile after setTimeout, the file is read. This defeats our purpose of putting the time out. The only solution is nesting callbacks. Nesting callbacks are calling functions and their callbacks are from another function’s callback. We want to nest callbacks so that, after the delay ends, we read the file in its callback, achieving the right order of execution.


const fs = require('fs'); // import fs module
// set time out for 5 seconds
setTimeout(function(){
    console.log('five seconds complete');
    // read file in callback of setTimeout
    fs.readFile('sample.txt', 'utf8', function(err, data){
        if(err === null){ // error check
            console.log('File content:');
            console.log(data);  // print file data
        } else{
            console.log('error reading file'); // error so print this
        }
    })
}, 5000); // 5000ms = 5 seconds

console.log('all functions called'); // print after calling all function

// By moving the fs.readFile function inside the callback of setTimeout function, our file is read after a five second delay. This fixes the order of execution. Nesting callbacks maintain the order of execution in asynchronous functions.
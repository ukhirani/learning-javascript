const fs = require('fs');

function callbackfn(){
    console.log("file read !");
}

fs.readFile("async.js", callbackfn);

console.log("hello");

// notice how the hello gets printed first before the file is read gets logged



//node interacting-with-files.js 
// hello
// file read !






const fs = require('fs'); // import fs module
fs.readFile('sample.txt', 'utf8', function(err, data){
    if(err === null){ // error check
        console.log('File content:');
        console.log(data);  // print file data
    } else{
        console.log('error reading file'); // error so print this
    }
})
console.log('Called file read'); // print after calling fs.readFile function

// node reading-files-asynchronously.js 

// Called file read
// File content:
// The quick brown fox ran over the lazy dog.


//Notice the output. The fs.readFile function was called asynchronously because the output of the print statement at line 10 is at the top. The callback function prints the content of the file as a string when file reading completes. Play around with the arguments and options to explore further.
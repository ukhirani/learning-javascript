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
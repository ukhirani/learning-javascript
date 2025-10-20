const fs = require("fs"); // import fs module
// create function which returns a promise
// promise is for setTimeout for `time` milliseconds
var getPromise = function (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`timed out for ${time}ms`); // return string using resolve
    }, time);
  });
};

var promise = getPromise(5000); // get promise for 5000 seconds
console.log("Start promise"); // print before invoking .then method

promise
  .then((val) => {
    console.log("in then block#1 and received:", val);
    // return new Promise which readss file
    return new Promise((resolve, reject) => {
      // read file and resolve in the callback of file read
      fs.readFile("Reading Files/sample.txt", "utf8", (err, data) => {
        if (err === null) {
          console.log("file read complete");
          resolve(data); // return data read data in resolve
        }
      });
    });
  })
  .then((val) => {
    console.log("in then block#2 and received:", val);
    return getPromise(2000); // return the promise returned from getPromise
  })
  .then((val) => {
    console.log("in then block#3 and received:", val);
    console.log("end of chain.");
  });

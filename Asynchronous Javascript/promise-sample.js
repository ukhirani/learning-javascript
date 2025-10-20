var func = function (resolve, reject) {
  setTimeout(function () {
    // in callback call resolve function
    console.log("in setTimeout callback");
    resolve("Timed out for five seconds"); // as you can see this is being sent as a argument
    // not using reject as not catering error handling for now
  }, 5000); // setTimeout for 5 seconds
};
var callbackfn = function (value) {
  console.log("In callbackfn and printing value:");
  console.log(value); // print the value received
};

var promise = new Promise(func);

promise.then(callbackfn);

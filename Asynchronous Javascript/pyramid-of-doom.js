//this code snippet will illustrate how promises prevent the pyramid of doom
var doSomething1 = function (argument) {
  console.log(argument);
  return argument; // this return value is passed to doSomething2
};

var doSomething2 = function (argument) {
  console.log(argument);
  return argument; // this return value is passed to doSomething3
};
var doSomething3 = function (argument) {
  console.log(argument);
};

var func = function (resolve, reject) {
  console.log("Promise being called !");
  resolve("Do Something");
};

var promise = new Promise(func);

promise.then(doSomething1).then(doSomething2).then(doSomething3);

// Functions used by the then method do not use resolve function. They just pass the value returned normally to the successive then method

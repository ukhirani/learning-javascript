// Callback functions can be used to do tasks after the execution of asynchronous functions. However, callback function become tedious when designing a program with a series of sequential asynchronous functions. It results in code congestion.
// To run asynchronous functions sequentially, nesting callbacks lead to “callback hell,” also known as the “pyramid of doom!” To avoid a doom pyramid that grows with every successive asynchronous function, use promises.
// A promise is a class meant to neatly execute asynchronous functions. It acts as a wrapper to execute asynchronous functions with a callback by providing a nicer syntax. You can create promises with or without asynchronous functions. Let’s see the syntax.

var func = function (resolve, reject) {
  // add tasks synchronous or asynchronous
  x = 5;
  if (x === 5) {
    resolve(/* return value */);
  } else {
    reject(/* return value */);
  }
};

var promise = new Promise(func);

// The function func passed as an argument takes two arguments. They are both here.

// Resolve function: It is the first argument of the function func and is invoked, if it works as intended. The argument of the resolve function is given the return value.

// Reject function: It is the second argument of the function func and is invoked if something fails. It is usually used for error handling. The argument of the reject function would be given the return value, which usually is an error object Error.
// then method
// The then method adds callbacks or tasks that must be executed after the function inside the promise completes. The syntax is as follows.

var callbackfunction = function (value) {
  return value;
};

promise.then(callbackfunction);
//NOTE: The tasks in the then() method are executed with a higher priority than those in the callback queue.

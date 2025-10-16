function complete(name){
  // return function which prints string 'function complete' and name argument
  return function (){console.log('function complete: ',name)};
}
// setTimeout for 5000ms = 5 seconds
setTimeout(complete('setTimeout 5000'), 5000.0); 
// setTimeout for 2000ms = 2 seconds
setTimeout(complete('setTimeout 2000'), 2000.0); 
// print 'End of program'
console.log('End of program');
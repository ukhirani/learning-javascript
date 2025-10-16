// Because JavaScript is asynchronous, it will not wait for blocking code. Instead, it carries out computable tasks while waiting for blocking code to finish. 

function complete(){
  console.log("function completed!");
  return;
}
setTimeout(complete, 2000.0); // 2000 = 2 seconds of idle time
console.log("Calling after setTimeout");

// Using the same example as before, adding code after the blocking function setTimeout will be executed by JavaScript. The print statement on line 6 is run despite blocking the program with the setTimeout function. The peculiar order of print statements occurs because JavaScript supports asynchronous programming.


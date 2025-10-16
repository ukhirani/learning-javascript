function complete(){
  console.log("function completed!");
  return;
}
setTimeout(complete, 2000.0); // 2000 = 2 seconds of idle time
console.log("Calling after setTimeout");

// Because JavaScript is asynchronous, it will not wait for blocking code. Instead, it carries out computable tasks while waiting for blocking code to finish. 
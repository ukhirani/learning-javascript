function complete(){
  console.log("function completed!");
  return;
}
setTimeout(complete, 2000.0); // 2000 = 2 seconds of idle time


// Here, setTimeout(func, x) function invokes the function func after x milliseconds of idle time. In our code, pass setTimeout function the arguments complete function. This prints the string 'function completed!' and number 2000.0 on line 5. Our program will be idle for two seconds, and then invoke the function complete after it. Notice that the program takes more than two seconds to complete.
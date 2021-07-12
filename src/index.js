function sayHello() {
  return function () {
    return "hello world ";
  };
}

let fn = sayHello();
let message = fn();

// High order function is a function that takes a function as an argument

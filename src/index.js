function sayHello() {
  return function () {
    return "hello world ";
  };
}

let fn = sayHello();
let message = fn();

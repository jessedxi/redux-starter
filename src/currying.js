function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

add(1)(5); //separate args using paranthesis

// Currying takes a function with N args and reduces it to a function with 1 args

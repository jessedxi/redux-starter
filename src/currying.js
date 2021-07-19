function add(a) {
  return function (b) {
    return a + b;
  };
}

add(1)(5);

// Currying takes a function with N args and reduces it to a function with 1 args

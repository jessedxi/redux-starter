function add(a) {
  return function (b) {
    return a + b;
  };
}

// Currying takes a function with N args and reduces it to a function with 1 args

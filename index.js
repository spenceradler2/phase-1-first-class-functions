function receivesAFunction(thing) {
    thing();
  }

function returnsANamedFunction() {
         function named(){
    return "hello"
    };
    return named
  }

 function returnsAnAnonymousFunction() {
    return function(){};
  };
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function big(f, g) {
  let arrow_f = function f() {}
  let arrow_g = function g() {}
  // console.log( f() > g() ? "f" : g() > f() ? "g" : "neither")

  if (arrow_f > arrow_g) {
    console.log('f')
  } else {
    console.log('g')
  }
}

big(10, 5)

function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

//let result = add(5, '10'); // throws an error
let result = add(5, 10); // Correct usage
console.log(result); // Outputs 15
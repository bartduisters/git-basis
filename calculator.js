const calculator = () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b; 
  const subtract = (a, b) => a - b;

  return { sum, multiply, subtract };
};

const { sum, multiply, subtract } = calculator();

console.log(sum(2, 3));
console.log(multiply(2, 3));
console.log(subtract(2, 3));

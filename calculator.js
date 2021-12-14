const calculator = () => {
  const sum = (a, b) => a + b;
  const multiply = (a, b) => a * b; 

  return { sum, multiply };
};

const { sum, multiply } = calculator();

console.log(sum(2, 3));
console.log(multiply(2, 3));

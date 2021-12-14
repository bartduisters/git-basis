const calculator = () => {
  const sum = (a, b) => a + b;
  const multiply = (b, a) => b / a;

  return { sum, multiply };
};

const { sum, multiply } = calculator();

console.log(sum(2, 3));
console.log(multiply(2, 3));

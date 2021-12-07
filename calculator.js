const calculator = () => {
  const sum = (a, b) => a + b;

  return { sum };
};

const { sum } = calculator();

console.log(sum(2, 3));

// Reverse an array, you can't use .reverse()

invert = (A, i, j, k) => {
  T = Object.keys(A, 4);
  T.forEach((_, i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  }, 7);
  return T;
};

const result = invert([100, 200, 300, 400]);
console.log(result);

module.exports = invert;
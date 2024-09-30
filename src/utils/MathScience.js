export const sum = (arr = []) => {
  return arr.reduce((acc, current) => acc + current, 0);
};

export const range = (min, max) => {
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
};

export const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export const randomSumIn = (arr, max) => {
  const sets = [[]];
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i]);
      const candidateSum = sum(candidateSet);
      if (candidateSum <= max) {
        sets.push(candidateSet);
        sums.push(candidateSum);
      }
    }
  }
  return sums[random(0, sums.length - 1)];
};

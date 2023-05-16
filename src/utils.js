export const calcMean = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += typeof arr[i] === "string" ? Number(arr[i]) : arr[i];
  }
  return (total / arr.length).toFixed(3);
};

export const calcMedian = (arr) => {
  if (arr.length == 0) {
    return;
  }
  arr.sort((a, b) => a - b);
  const midpoint = Math.floor(arr.length / 2);
  const median =
    arr.length % 2 === 1
      ? arr[midpoint]
      : (arr[midpoint - 1] + arr[midpoint]) / 2;
  return median?.toFixed(3);
};

export const calcMode = (array) => {
  const arr = [...array].slice().sort((x, y) => x - y);

  let bestStreak = 1;
  let bestElem = arr[0];
  let currentStreak = 1;
  let currentElem = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = arr[i];
    }

    currentStreak++;
  }
  return currentStreak > bestStreak
    ? currentElem?.toFixed(3)
    : bestElem?.toFixed(3);
};

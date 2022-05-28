function solution(arr) {
  let sum = 0;
  let aCount = 0;
  arr.filter((num) => {
    aCount = num === 1 ? aCount + 1 : 0;
    sum += aCount;
  });
  return sum;
}

solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);

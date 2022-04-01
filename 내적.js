function solution(a, b) {
  return a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((prev, curr) => prev + curr);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);

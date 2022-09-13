function solution(sizes) {
  let a = 0;
  let b = 0;
  for (num of sizes) {
    if (num[0] < num[1]) {
      num = [num[1], num[0]];
    }
    if (a < num[0]) {
      a = num[0];
    }
    if (b < num[1]) {
      a = num[1];
    }
    console.log(num, "num");
  }
  console.log(a, "a");
  return a * b;
}

solution([
  [10, 7],
  [12, 3],
  [5, 15],
  [8, 15],
  [14, 7],
]);

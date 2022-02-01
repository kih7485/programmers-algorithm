function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}
console.log(solution(10));

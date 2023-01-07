function solution(n) {
  const result = [];
  if (n === 1 || n === 0) {
    return n;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
    }
  }
  return result.reduce((a, b) => a + b);
}
console.log(solution(0));

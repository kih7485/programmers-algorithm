function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let remainder = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += remainder;
  }
  return answer;
}
solution(3, 1, 20);

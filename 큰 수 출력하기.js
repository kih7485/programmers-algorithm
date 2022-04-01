function solution(n) {
  let answer = [];
  answer.push(n[0]);
  for (let i = 1; i < n.length; i++) {
    if (n[i] > n[i - 1]) {
      answer.push(n[i]);
    }
  }
  console.log(answer);
}

solution([7, 3, 9, 5, 6, 12]);

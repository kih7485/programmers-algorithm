function solution(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
}
console.log(solution(7, 6, 22));

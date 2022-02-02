function solution(numbers) {
  return numbers.sort().filter((num) => {
    if (num % 2 === 1) return num;
  })[0];
}

solution([12, 77, 38, 41, 53, 92, 85]);

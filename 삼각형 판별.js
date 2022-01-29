function solution(a, b, c) {
  return [a, b, c].reduce((previous, current) => {
    return previous > current ? current : previous;
  });
}
console.log(solution(7, 6, 22));

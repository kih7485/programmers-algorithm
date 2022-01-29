const ONE_DAS = 12;
function solution(n) {
  let div = n / ONE_DAS;
  return Math.ceil(div);
}

solution(25);

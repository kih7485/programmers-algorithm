//1.가위 2.바위 3.보
function solution(a, b) {
  let winnerArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) winnerArr.push("D");
    else if (a[i] === 1 || b[i] === 3) winnerArr.push("A");
    else if (a[i] === 2 || b[i] === 1) winnerArr.push("A");
    else if (a[i] === 3 || b[i] === 2) winnerArr.push("A");
    else winnerArr.push("B");
  }
  return winnerArr;
}
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));

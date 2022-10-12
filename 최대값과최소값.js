function solution(s) {
  var answer = "";
  const numArr = s.split(" ").map((num) => Number(num));
  const maxNum = Math.max(...numArr);
  const minNum = Math.min(...numArr);
  return String(minNum) + " " + String(maxNum);
}

solution("1 2 3 4");

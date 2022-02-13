function solution(s) {
  const splitNum = parseInt(s.length / 2);
  const stringArr = s.split("");
  console.log(splitNum, "splitNum");
  for (let i = 0; i < stringArr.length; i++) {
    console.log(stringArr[i]);
  }
  var answer = 0;
  return answer;
}

solution("aabbaccc");

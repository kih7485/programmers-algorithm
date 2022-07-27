function solution(s) {
  s = s.toLowerCase();
  return s.split("").reverse().join("") !== s ? "NO" : "YES";
}

console.log(solution("우영영웈"));

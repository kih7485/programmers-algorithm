function solution(arr) {
  return arr.map((num) => {
    const numLength = num.length;
    const sum = String(num)
      .split("")
      .reduce((a, b) => Number(a) + Number(b));

    console.log(numLength, "numLength");
  });
}

console.log(solution([123, 234]));

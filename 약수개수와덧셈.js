function solution(left, right) {
  let answer = 0;
  //let arr = [];
  for (let i = 0; i <= right - left; i++) {
    const num = left + i;
    const divideNum = divisorNum(num).length;
    if (divideNum % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
    //console.log(divideNum);
    //arr.push(divideNum);
    // for (let j = 0; j < divideNum.length; j++) {
    //   console.log(divideNum[j]);
    // }
    // arr.push(left + i);
  }

  console.log(answer);
  //   console.log(
  //     arr.reduce((prev, curr) => {
  //       return prev % 2 === 0 ? prev + curr : prev - curr;
  //       //console.log(prev);
  //     }, 0)
  //   );
  return answer;
}

function divisorNum(num) {
  let returnNum = [];
  for (let i = 1; i <= num; i++) {
    // console.log(num % i);
    if (num % i === 0) returnNum.push(i);
  }
  return returnNum;
}

solution(13, 17);

function solution(nums) {
  let sosuArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // if (i !== j && i !== k && j !== k) continue;
        const sum = nums[i] + nums[j] + nums[k];
        // if (sum === 19) {
        //   console.log(i, j, k, "ssss");
        // }
        if (isPrime(sum)) sosuArr.push(sum);
      }
    }
  }
  return sosuArr.length;
}

function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}

solution([1, 2, 7, 6, 4]);

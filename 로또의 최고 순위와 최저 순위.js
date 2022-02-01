function solution(lottos, win_nums) {
  const sol = { min: [], max: [] };
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      sol.max.push(lottos[i]);
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        sol.min.push(lottos[i]);
        sol.max.push(lottos[i]);
      }
    }
  }
  console.log(sol);
  const answer = [];
  answer.push(rank(sol.max.length));
  answer.push(rank(sol.min.length));
  console.log(answer);
  return answer;
}

function rank(num) {
  let ranking = 0;
  switch (num) {
    case 6:
      ranking = 1;
      break;
    case 5:
      ranking = 2;
      break;
    case 4:
      ranking = 3;
      break;
    case 3:
      ranking = 4;
      break;
    case 2:
      ranking = 5;
      break;
    default:
      ranking = 6;
      break;
  }
  return ranking;
}

// 남의 풀이...
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter((v) => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter((v) => !v).length;

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }

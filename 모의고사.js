function solution(answers) {
  const mathFailers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const scores = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (mathFailers[0][i % 5] == answers[i]) {
      scores[0]++;
    }
    if (mathFailers[1][i % 8] == answers[i]) {
      scores[1]++;
    }
    if (mathFailers[2][i % 10] == answers[i]) {
      scores[2]++;
    }
  }
  const answer = [];
  const maxValue = Math.max(...scores);
  for (let i = 0; i < scores.length; i++) {
    if (maxValue === scores[i]) {
      answer.push(i + 1);
    }
  }
  return answer;
}

solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

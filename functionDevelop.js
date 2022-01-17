function solution(progresses, speeds) {
    let answer = [];
    const remainDays = progresses.map( (num, i) => {
        const remainder = (100-num)/speeds[i];
        const remainNum = !Number.isInteger(remainder) ? Math.floor(remainder)+1: Math.floor(remainder);
        return remainNum;
     });
    let temp = 1;
    let prev = remainDays[0];
    for (let i = 1; i < remainDays.length; i++) {
        let curr = remainDays[i];
        if (prev >= curr) {
            temp += 1;
        } else {
            answer.push(temp);
            prev = curr;
            temp = 1;
        }
    }
    answer.push(temp);
    return answer;
}

solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])
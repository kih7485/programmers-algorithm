function solution(array, commands) {
    let answer = [];
    
    commands.forEach(element => {
        const splitNum = array.filter( (num, i) => {
            return i+1>=element[0] && i+1<=element[1]
        }).sort();
        answer.push(splitNum[element[2]-1]);
    });
    console.log(answer)
    return answer;
}

solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3],[1,5,2]])
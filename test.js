function solution(subway, start, end) {
    var answer = 0;
    //console.log(subway);
    for (let i = 0; i < subway.length; i++){
        const subwayLines = subway[i].split(" ");
        const subwayStartLine = subway[i].indexOf(start);
        for (let j = 0; j < subway.length; j++) {
        
        }
        //console.log(i);
        //const subwayLines = subway[i];
        
        const subwayEndLine = subway[i].indexOf(end);
        console.log(subwayEndLine);
    }
    return answer;
}


solution(["1 2 3 4 5 6 7 8", "2 11", "0 11 10", "3 17 19 12 13 9 14 15 10", "20 2 21"], 1, 9);
function solution(answers) {
    let giveUpMathOne = [1,2,3,4,5]
    let giveUpMathTwo = [2,1,2,3,2,4,2,5]
    let giveUpMathThree = [3,3,1,1,2,2,4,4,5,5]
    let cnt1=0,cnt2=0,cnt3=0;
    for(let i in answers){
        if(i > 4){
            giveUpMathOne.push(giveUpMathOne[i%5]); 
        }
        if(i > 7){
            giveUpMathTwo.push(giveUpMathTwo[i%8]); 
        }
        if(i > 9){
            giveUpMathThree.push(giveUpMathThree[i%10]); 
        }
        if(answers[i] === giveUpMathOne[i]) cnt1++;
        if(answers[i] === giveUpMathTwo[i]) cnt2++;
        if(answers[i] === giveUpMathThree[i]) cnt3++;
    }
    const arr = [cnt1, cnt2, cnt3];
    const max = Math.max(...arr);
    let res = [];
    for(let i in arr){
        if(arr[i] === max){
            res.push(Number(i)+1);
        }
    }
    return res;
}

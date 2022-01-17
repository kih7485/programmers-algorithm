function solution(n)
{
    let numArr = n.split("");
    
    return numArr.reduce( (a,b) => Number(a)+Number(b) );
}


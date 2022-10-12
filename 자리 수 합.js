function solution(arr) {
  let a = 0;
    const arr2 = arr
        .map((num) => {
            const numLength = String(num).length;
            const sum = String(num)
                .split("")
                .reduce((a, b) => Number(a) + Number(b));
            return { a: sum, length: numLength };
        });
    arr2.forEach((obj, i)) => {
        
    });
}

console.log(solution([1231, 234]));

function solution(numbers, hand) {
  let answer = "";

  const getDistanse = (arr1, arr2) => {
    return Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  };
  const setLocation = (hands, loc) => {
    currentHands[hands] = loc;
    hands === "left" ? (answer += "L") : (answer += "R");
  };

  let block = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  let currentHands = { left: [4, 1], right: [4, 3] };
  numbers.map((num) => {
    switch (block[num][1]) {
      case 1: //left
        setLocation("left", block[num]);
        break;
      case 3: //right
        setLocation("right", block[num]);
        break;
      default:
        const distancsByLeft = getDistanse(currentHands.left, block[num]);
        const distancsByRight = getDistanse(currentHands.right, block[num]);

        if (distancsByLeft === distancsByRight) {
          if (hand === "left") {
            setLocation("left", block[num]);
          } else {
            setLocation("right", block[num]);
          }
        } else {
          if (distancsByLeft < distancsByRight) {
            setLocation("left", block[num]);
          } else {
            setLocation("right", block[num]);
          }
        }

        break;
    }
  });
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");

// url: https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let arr = new Array(n).fill(0);

  for (let i = 0; i < computers.length; i++) {
    const equalArr = computers[i].filter((number) => number === 1).length;
    if (equalArr === n) {
      arr = new Array(n).fill(0);
      arr[0] = 1;
      break;
    } else if (equalArr > 1) {
      computers[i].forEach((number, j) => {
        if (number === 1 && arr[j] !== 1) {
          arr[equalArr - 1] = 1;
        }
      })
    } else {
      arr[i] = 1;
    }
  }

  return arr.filter(v => v === 1).length;
}

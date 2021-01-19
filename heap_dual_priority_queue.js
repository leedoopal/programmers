// url: https://programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
  let answer = [];
  const queue = [];

  // 순차적으로 돈다.
  operations.forEach(v => {
    // 공백을 기준으로 자른다.
    const oper = v.split(" ");

    // I가 포함되어 있는 경우 push 한다.
    if (v.includes("I")) {
      queue.push(parseInt(oper[1]))
    }

    // D 1인 경우 가장 큰 값을 삭제한다.
    if (v === 'D 1') {
      const maxIndex = queue.findIndex(v => v === Math.max(...queue))
      queue.splice(maxIndex, 1);
    }

    // D -1인 경우 가장 작은 값을 삭제한다.
    if (v === 'D -1') {
      const minIndex = queue.findIndex(v => v === Math.min(...queue))
      queue.splice(minIndex, 1);
    }
  })

  if (queue.length) answer = [Math.max(...queue), Math.min(...queue)];

  // [큰 값, 작은 값]을 리턴한다. 큐가 비어있을경우 [0, 0]
  return answer.length ? answer : [0, 0]
};

// url: https://programmers.co.kr/learn/courses/30/lessons/43162

function solution(n, computers) {
  let arr = new Array(n).fill(false);
  let answer = 0;

  function dfs(index) {
    arr[index] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[index][i] === 1 && !arr[i]) {
        dfs(i);
      }
    }
  }

  for (let j = 0; j < computers.length; j++) {
    if (!arr[j]) {
      answer++;
      dfs(j);
    }
  }

  return answer;
}

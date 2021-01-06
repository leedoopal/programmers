function solution(people, limit) {
  // 내림차순을 먼저 한다.
  let stack = people.sort((a, b) => b - a);
  let answer = 0;
  let n = 0;
  let m = stack.length - 1;

  while (n < m) {
    // 제일 큰 수와 제일 작은 수를 더한다.
    let sum = stack[n] + stack[m];

    // sum의 값이 limit 보다 작다면 더 작은 수를 더할 수 있기 때문에 --를 한다.
    if (sum <= limit) {
      m--;
    }

    // 시도한 만큼 n++
    n++;

    // 정답도 ++
    answer++;
  }

  // 마지막으로 n, m의 값이 같다면 ++
  if (n === m) answer++;

  return answer;
}

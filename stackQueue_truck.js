// url: https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;

  // 다리 수만큼 배열을 만들어 놓는다.
  let queue = Array.from(new Array(bridge_length), () => 0);

  // 다리 수가 있을 때까지 루프를 돈다.
  while (queue.length) {
    // 계속 1초씩 더해준다.
    answer++;

    // 1초를 더함과 동시에 큐의 첫번째를 삭제한다.
    queue.shift();

    // 건너야 할 트럭이 존재하는 경우
    if (truck_weights.length) {
      // 현재 큐의 합계 + 다음 트럭 <= weight
      if (queue.reduce((a, b) => a + b) + truck_weights[0] <= weight) {
        // 건널 트럭 하나를 shift 하여 queue에 넣어준다.
        queue.push(truck_weights.shift())
      } else {
        // 건널 수 없는 경우 0을 넣어준다.
        queue.push(0);
      }
    }
  }

  return answer;
}

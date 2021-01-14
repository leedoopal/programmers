// url: https://programmers.co.kr/learn/courses/30/lessons/42583

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let queue = Array.from(new Array(bridge_length), () => 0);

  while (queue.length) {
    answer++;
    queue.shift();
    if (truck_weights.length) {
      if (queue.reduce((a, b) => a + b) + truck_weights[0] <= weight) {
        let current_truck = truck_weights.shift();
        queue.push(current_truck)
      } else {
        queue.push(0);
      }
    }
  }

  return answer;
}

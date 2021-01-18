// url: https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0;
  let arr = priorities.map((v, i) => {
    return { location: i === location, value: v }
  });

  while (arr.length) {
    // 맨 앞의 값을 가져온다.
    let current = arr.shift();

    // 비교해서 가장 큰 값이 아니면 제일 뒤로 보낸다.
    if (arr.some(v => v.value > current.value)) {
      arr.push(current);
    } else {
      // current가 가장 높은 우선순위의 값이라면 answer++
      answer++;
      // 원하는 문서라면 리턴한다.
      if (current.location) return answer;
    }
  }
}

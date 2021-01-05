// url: https://programmers.co.kr/learn/courses/30/lessons/42860#

function solution(name) {
  let answer = 0;

  // 왼쪽에서 오른쪽으로 이동한 경우! 그 개수만큼 더해준당
  let count = name.length - 1;

  const Z = 25;
  let countTemp = null;

  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i) - 65;

    // 여기는 A가 가까운지 Z가 가까운지 계산하는 코드
    answer += (Z - char + 1) > char ? char : (Z - char + 1);

    // A가 중복해서 여러개 있을 때 스틱을 멈추기 위한 코드
    if (char === 0) {
      let temp = 0;
      let nextIndex = i + 1;

      // 다음 인덱스에도 A가 있는 경우 temp를 ++한다.
      while (nextIndex < name.length && name.charCodeAt(i + 1) - 65 === 0) {
        temp++;
        nextIndex++;
      }

      // 총 네임에서 더해준 temp를 뺀다.
      countTemp = name.length - 1 - temp;
    }
  }

  // count와 countTemp를 비교해서 최종 결과값을 찾는다.
  if (count > countTemp && countTemp !== null) count = countTemp;

  answer += count;
  return answer;
}

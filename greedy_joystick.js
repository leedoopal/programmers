// url: https://programmers.co.kr/learn/courses/30/lessons/42860#

function solution(name) {
  let answer = 0;

  // 왼쪽에서 오른쪽으로 이동한 경우! 그 개수만큼 더해준당
  let count = name.length - 1;

  const Z = 25;
  let indexTemp = 0;

  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i) - 65;
    answer += (Z - char + 1) > char ? char : (Z - char + 1);

    // A일때
    if (char === 0) {
      for (indexTemp = i + 1; indexTemp < name.length; indexTemp++) {
        if (name[indexTemp] !== 'A') break;
      }

      const left = i - 1;
      const right = name.length - indexTemp;
      count = Math.min(count, left > right ? left + right * 2 : left * 2 + right)
    }
  }

  return answer + count;
}

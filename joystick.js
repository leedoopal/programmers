function solution(name) {
  let answer = 0;
  let count = name.length - 1;

  const A = 0;
  const Z = 25;

  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i) - 65;
    answer += (Z - char + 1) > char ? char : (Z - char + 1);
    let temp = 0;

    // A를 만난 경우
    if (char === 0) {
      temp += i;
      console.log(count, temp);
    }
  }

  answer += count;
  return answer;
}

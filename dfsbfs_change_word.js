function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const queue = [begin];
  const checkArr = new Set();
  let answer = 0;

  while (queue.length) {
    const word = queue.shift();
    checkArr.add(word);

    if (word === target) return answer;

    for (let i = 0; i < word.length; i++) {
      console.log(word[i]);
    }
  }

  return answer;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;
  const queue = [begin];
  const checkArr = new Set();
  let tempArr = [];
  let answer = 0;

  while (queue) {
    const word = queue.shift();
    checkArr.add(word);

    if (word === target) return answer;

    for (let i = 0; i < word.length; i++) {
      const letter = slicedWord(word, i);
      const matched = words.filter((v, j) => !checkArr.has(v) && slicedWord(v, i) === letter);
      tempArr.push(...matched)
    }


    if (!queue.length) {
      answer += 1;
      queue.push(...tempArr)
      tempArr = [];
    }

    if (checkArr.size === words.length) return answer;
  }

  function slicedWord (word, i) {
    const wordToArray = word.split('');
    wordToArray.splice(i, 1);
    return wordToArray.join('');
  }
}

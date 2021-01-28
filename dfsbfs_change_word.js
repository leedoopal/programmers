function solution(begin, target, words) {
  const targetArr = target.split('');
  let answer = 0;
  let index = 0;

  function dfs(word) {
    console.log('word: ', word);
    const wordArr = word.split('');
    const filterArr = targetArr.filter((v, i) => v === wordArr[i])
    if (filterArr[0]) {
      const filterIndex = targetArr.findIndex(v => v === filterArr[0]);
      delete targetArr[filterIndex]
      console.log(targetArr);
      dfs(words[index + 1])
    }
  }
  dfs(words[0])

  return answer;
}

function solution(skill, skill_trees) {
  const result = new Array(skill_trees.length).fill([]);

  skill_trees.forEach((v, i) => {
    const input = skill.split('')
    const arr = v.split('');
    let index = 0;
    let current = input[index];

    if (arr.findIndex(x => x === current) > -1) {
      result[i] = findWord(input, arr, current)
    } else if (index < skill.length) {
      result[i] = findWord(input, arr, input[index + 1])
    }
  })

  function findWord(input, arr, current) {
    const output = arr.concat(arr.splice(0, arr.findIndex(x => x === current)));
    return input.map(y => {
      return output.findIndex(el => el === y)
    })
  }

  const answer = result.map(v => {
    let temp = v[0];
    for (let i = 1; i < v.length; i++) {
      if (temp > v[i]) {
        return false;
      } else {
        temp = v[i];
      }
    }
    return true;
  });

  return answer.filter(v => v).length;
}

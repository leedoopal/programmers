function solution(skill, skill_trees) {
  function checkAnswer(v) {
    const input = skill.split('');
    for (let i = 0; i < input.length; i++) {
      if (!skill.includes(v[i])) continue;
      if (v[i] === input.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(checkAnswer).length;
}

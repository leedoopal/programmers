// url: https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  let arr = [];
  let output = {};
  let obj = {};
  let answer = [];

  for (let i in genres) {
    arr.push([i, genres[i], plays[i]])
    obj[genres[i]] = 0;
    output[genres[i]] = [];
  }

  arr.forEach(v => {
    obj[v[1]] += v[2];
  })

  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[2] < b[2] ? 1 : (a[2] > b[2]) ? -1 : 0;
    } else {
      return a[2] < b[2] ? 1 : -1;
    }
  })

  obj = Object.entries(obj).sort((a, b) => b[1] - a[1]).map(v => v[0])

  let currentKey = arr[0][1];
  let index = 0;
  arr.forEach((v, index) => {
    if (v[1] === currentKey && index < 2) {
      output[v[1]].push(v[0]);
      index++;
    } else if (v[1] !== currentKey) {
      currentKey = v[1];
      output[v[1]].push(v[0])
    }
  })

  obj.forEach((v) => {
    if (Object.keys(output).find((key) => v === key)) {
      answer.push(output[v].map(v => parseInt(v)))
    }
  })

  return answer.flat();
}

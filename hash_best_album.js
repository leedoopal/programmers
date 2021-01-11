// url: https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  let arr = [];
  let answer = {};
  let obj = {};

  for (let i in genres) {
    arr.push([genres[i], plays[i]])
    obj[genres[i]] = 0;
    answer[genres[i]] = [];
  }

  arr.forEach(v => {
    obj[v[0]] += v[1];
  })

  // console.log(Object.entries(obj).sort((a, b) => b[1] - a[1]));

  let currentKey = arr[0][0];
  arr.forEach((v, index) => {
    if (v[0] === currentKey) {
      answer[v[0]].push({key: index, value: v[1]})
    } else if (v[0] !== currentKey) {
      currentKey = v[0];
      answer[v[0]].push({key: index, value: v[1]})
    }
  })

  return answer;
}

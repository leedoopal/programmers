function solution(jobs) {
  let answer = 0
  let i = 0;
  let time = 0;
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  const queue = [];
  while (i < jobs.length || queue.length !== 0) {
    if (jobs.length > i && time >= jobs[i][0]) {
      queue.push(jobs[i++]);
      queue.sort((a, b) => {
        return a[1] - b[1];
      });
      continue;
    }
    if (queue.length !== 0) {
      time += queue[0][1];
      answer += time - queue[0][0];
      queue.shift();
    } else {
      time = jobs[i][0];
    }
  }
  return parseInt(answer / jobs.length);
};

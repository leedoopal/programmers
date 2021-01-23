function solution(N, number) {
  const arr = new Array(8).fill(0, undefined, undefined).map(() => new Set());

  for (let i = 0; i < 8; i++) {
    arr[i].add(Number(N.toString().repeat(i + 1)));

    for (let j = 0; j < i; j++) {
      for (const op1 of arr[j]) {
        for (const op2 of arr[i - j - 1]) {
          arr[i].add(op1 + op2)
          arr[i].add(op1 - op2)
          arr[i].add(op1 * op2)
          if (op2 !== 0) arr[i].add(op1 / op2)
        }
      }
    }

    if (arr[i].has(number)) return i + 1;
  }

  return -1;
}

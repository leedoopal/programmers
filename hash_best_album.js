// url: https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const genresList = genres.reduce((acc, cur, index) => {
    if (!acc[cur]) {
      acc[cur] = {
        total: 0,
        list: [],
      };
    }

    // total로 비교해야하기 때문에 값을 저장
    acc[cur].total += plays[index];
    // index를 결과값으로 쓰기 때문에 index와 값을 함께 저장
    acc[cur].list.push([index, plays[index]]);

    return acc;
  }, {});

  const sortGenresList = Object.values(genresList).sort(
    (a, b) => {
      // 먼저 total 내림차순으로 정렬
      return b.total - a.total;
    },
  );

  // 정렬한 total을 사용한다.
  const answer = sortGenresList.reduce((acc, genre) => {
    // list의 값을 가지고 우선 비교하고
    genre.list.sort((a, b) => {
      return b[1] - a[1];
    });

    // 각 항목의 첫번째(제일 큰 값) 값을 넣어준다.
    acc.push(genre.list[0][0]);

    // 리스트가 여러개일 경우 그 다음 값을 넣어준다.
    if (genre.list.length > 1) {
      acc.push(genre.list[1][0]);
    }

    return acc;
  }, []);

  return answer;
}

// Jan 25, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// RegExp
function solution(babbling) {
  let answer = 0;

  for (const word of babbling) {
    // 연속해서 같은 발음이 있는지 체크하고, 있으면 다음 단어로 넘어감
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;
    // 발음할 수 있는 단어로만 구성되어 있는지 체크하고, 맞으면 답을 증가
    if (/^(aya|ye|woo|ma)+$/g.test(word)) answer++;
  }
  return answer;
}

// RegExp + reduce
function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (answer, word) => (!regexp1.test(word) && regexp2.test(word) ? ++answer : answer),
    0
  );
}

// Built-in methods
function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];

  return babbling.reduce((answer, cur) => {
    for (let i = 0; i < words.length; i += 1) {
      if (cur.includes(words[i].repeat(2))) return answer;
    }

    for (let i = 0; i < words.length; i += 1) {
      cur = cur.split(words[i]).join(' ').trim();
    }

    if (cur) return answer;

    return (answer += 1);
  }, 0);
}

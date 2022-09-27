function solution(survey, choices) {
  let answer = '';
  const charObj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const chars = ['RT', 'CF', 'JM', 'AN'];

  choices.forEach((v, i) => {
    if (v === 1) {
      const char = survey[i][0];
      charObj[char] += 3;
    } else if (v === 2) {
      const char = survey[i][0];
      charObj[char] += 2;
    } else if (v === 3) {
      const char = survey[i][0];
      charObj[char] += 1;
    } else if (v >= 5) {
      const char = survey[i][1];
      charObj[char] += v - 4;
    }
  });
  chars.forEach(v => {
    const [first, second] = v.split('');
    if (charObj[first] < charObj[second]) {
      answer += second;
    } else {
      answer += first;
    }
  });

  return answer;
}

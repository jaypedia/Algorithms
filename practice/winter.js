// Nov 5, 2022

function solution(line) {
  let answer = '';

  for (let i = 0; i < line.length; i++) {
    const cur = line[i];
    let count = 0;

    for (let j = i + 1; i < line.length; j++) {
      if (cur === line[j]) count++;
      else break;
    }

    if (count > 0) {
      answer += cur + '*';
      i += count;
    } else {
      answer += cur;
    }
  }

  return answer;
}

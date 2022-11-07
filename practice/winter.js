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

// Nov 7, 2022
function solution2(n, student, point) {
  const arr = [];
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    arr.push({ id: i, score: 0, isA: i <= n / 2 ? true : false });
  }

  const getAMin = () => {
    let aMin = Infinity;
    let student = null;
    arr.forEach(v => {
      if (!v.isA) return;
      if (v.score < aMin || (v.score === aMin && v.id > student.id)) {
        aMin = v.score;
        student = v;
      }
    });
    return student;
  };

  student.forEach((s, i) => {
    const aMinStudent = getAMin();
    const cur = arr.find(v => v.id === s);
    cur.score += point[i];
    if (cur.isA) return;
    if (cur.score > aMinStudent.score || (cur.score === aMinStudent.score && cur.id < aMinStudent.id)) {
      cur.isA = true;
      aMinStudent.isA = false;
      answer++;
    }
  });

  return answer;
}

const n = 6;
const student = [6, 1, 4, 2, 5, 1, 3, 3, 1, 6, 5];
const point = [3, 2, 5, 3, 4, 2, 4, 2, 3, 2, 2];

console.log(solution2(n, student, point)); // 7

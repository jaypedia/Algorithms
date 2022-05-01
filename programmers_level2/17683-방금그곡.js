// May 1, 2022
// https://programmers.co.kr/learn/courses/30/lessons/17683

// My solution
function solution(m, musicinfos) {
  const answer = { title: '(None)', duration: 0 };

  const editMelody = (scale, duration) => {
    let melody = '';
    let idx = 0;
    while (duration--) {
      if (idx >= scale.length) idx = 0;
      melody += scale[idx];
      idx += 1;
      if (scale[idx] === '#') {
        melody += scale[idx];
        idx += 1;
      }
    }
    return melody;
  };

  const isMelodyIncluded = (melody, m) => {
    for (let i = 0; i < Math.floor(melody.length / m.length); i++) {
      const idx = melody.indexOf(m, i);
      if (idx !== -1 && melody[idx + m.length] !== '#') {
        return true;
      }
    }
    return false;
  };

  musicinfos.forEach(music => {
    const [start, end, title, scale] = music.split(',');
    const [startH, startM] = start.split(':');
    const [endH, endM] = end.split(':');
    const duration = +endH * 60 + +endM - (+startH * 60 + +startM);
    const melody = editMelody(scale, duration);

    if (isMelodyIncluded(melody, m) && answer.duration < duration) {
      answer.title = title;
      answer.duration = duration;
    }
  });

  return answer.title;
}

console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'])); // WORLD
console.log(solution('CCB', ['03:00,03:10,FOO,CCB#CCB', '04:00,04:08,BAR,ABC'])); // FOO

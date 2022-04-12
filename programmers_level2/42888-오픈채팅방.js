// April 12, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42888

// My solution
function solution(record) {
  const answer = [];
  const map = new Map();

  record.forEach(r => {
    const [_, id, nickname] = r.split(' ');
    if (nickname) map.set(id, nickname);
  });

  record.forEach(r => {
    const [action, id] = r.split(' ');
    if (action === 'Enter') answer.push(`${map.get(id)}님이 들어왔습니다.`);
    if (action === 'Leave') answer.push(`${map.get(id)}님이 나갔습니다.`);
  });

  return answer;
}

// Other's solutions
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  record.forEach(v => {
    const [state, id, nick] = v.split(' ');
    if (state !== 'Change') action.push([state, id]);
    if (nick) userInfo[id] = nick;
  });

  return action.map(([state, uid]) => `${userInfo[uid]}${stateMapping[state]}`);
}

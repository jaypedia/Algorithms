function solution(ids, days) {
  const answer = [];
  const map = new Map();
  ids.forEach((id, i) => {
    map.set(id, map.get(id) ? map.get(id).add(days[i]) : new Set(days[i]));
  });
  map.forEach((v, k) => {
    if (v.size >= 3) answer.push(k);
  });
  return answer;
}

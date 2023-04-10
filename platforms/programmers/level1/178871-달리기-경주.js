// Apr 10, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const map = players.reduce((acc, cur, idx) => {
    acc.set(cur, idx);
    return acc;
  }, new Map());

  callings.forEach((name) => {
    const ranking = map.get(name);
    const aheadPlayer = players[ranking - 1];
    players[ranking - 1] = name;
    players[ranking] = aheadPlayer;
    map.set(name, ranking - 1);
    map.set(aheadPlayer, ranking);
  });

  return players;
}

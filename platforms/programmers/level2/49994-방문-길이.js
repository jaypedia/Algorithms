// May 22, 2022
// https://programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  const coord = { x: 0, y: 0 };
  const visited = new Set();
  let totalLength = 0;

  const move = (dir) => {
    switch (dir) {
      case 'U':
        coord.y < 5 && coord.y++;
        break;
      case 'L':
        coord.x > -5 && coord.x--;
        break;
      case 'R':
        coord.x < 5 && coord.x++;
        break;
      case 'D':
        coord.y > -5 && coord.y--;
        break;
    }
  };

  for (const dir of dirs) {
    const path1 = '' + coord.x + coord.y;
    move(dir);
    const path2 = '' + coord.x + coord.y;
    const wholePath = path1 + path2;
    const reversedPath = path2 + path1;

    if (!visited.has(wholePath) && !visited.has(reversedPath) && path1 !== path2) {
      visited.add(wholePath);
      totalLength++;
    }
  }

  return totalLength;
}

// Apr 28, 2023
function solution(dirs) {
  let answer = 0;
  const loc = { x: 0, y: 0 };
  const set = new Set();

  for (const dir of dirs) {
    const curLoc = `${loc.x}${loc.y}`;
    switch (dir) {
      case 'U':
        loc.y < 5 && loc.y++;
        break;
      case 'D':
        loc.y > -5 && loc.y--;
        break;
      case 'R':
        loc.x < 5 && loc.x++;
        break;
      case 'L':
        loc.x > -5 && loc.x--;
        break;
    }
    const movedLoc = `${loc.x}${loc.y}`;
    const path = curLoc + movedLoc;
    const anotherPath = movedLoc + curLoc;

    if (!set.has(path) && !set.has(anotherPath) && curLoc !== movedLoc) {
      answer++;
      set.add(path);
      set.add(anotherPath);
    }
  }

  return answer;
}

function solution(dirs) {
  let loc = { x: 0, y: 0 };
  const dirMap = {
    U: { direction: 'y', value: 1 },
    D: { direction: 'y', value: -1 },
    R: { direction: 'x', value: 1 },
    L: { direction: 'x', value: -1 },
  };

  const pathSet = new Set();

  for (const dir of dirs) {
    const { direction, value } = dirMap[dir];
    const moved = loc[direction] + value;
    if (moved > 5 || moved < -5) continue;
    const movedLoc = { ...loc };
    movedLoc[direction] = moved;
    pathSet.add(`${loc.x}${loc.y}${movedLoc.x}${movedLoc.y}`);
    pathSet.add(`${movedLoc.x}${movedLoc.y}${loc.x}${loc.y}`);
    loc = movedLoc;
  }
  return pathSet.size / 2;
}

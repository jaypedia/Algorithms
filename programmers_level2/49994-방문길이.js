// May 22, 2022
// https://programmers.co.kr/learn/courses/30/lessons/49994

// My solution
function solution(dirs) {
  const coord = { x: 0, y: 0 };
  const visited = new Set();
  let totalLength = 0;

  const move = dir => {
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

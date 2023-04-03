// April 18, 2022
// https://programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  const [HIT, MISS] = [1, 5];
  const cacheHit = (city) => cache.includes(city);

  if (cacheSize === 0) return MISS * cities.length;

  cities.forEach((city) => {
    city = city.toUpperCase();

    if (cacheHit(city)) {
      time += HIT;
      cache.splice(cache.indexOf(city), 1);
    } else {
      time += MISS;
      if (cache.length >= cacheSize) cache.shift();
    }

    cache.push(city);
  });

  return time;
}

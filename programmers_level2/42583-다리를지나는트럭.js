// April 2, 2022
// https://programmers.co.kr/learn/courses/30/lessons/42583

// My solution
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const trucksOntheBridge = [];

  do {
    ++time;
    let totalWeight = trucksOntheBridge.reduce((a, b) => a + b[0], 0) + truck_weights[0];

    if (trucksOntheBridge.length && trucksOntheBridge[0][1] === bridge_length) {
      const done = trucksOntheBridge.shift();
      totalWeight -= done[0];
    }

    if (trucksOntheBridge.length < bridge_length && totalWeight <= weight) {
      const current = truck_weights.shift();
      trucksOntheBridge.push([current, 0]);
    }

    trucksOntheBridge.map(truck => truck[1]++);
  } while (truck_weights.length || trucksOntheBridge.length);

  return time;
}

// Nov 24, 2022
function solution(bridge_length, weight, truck_weights) {
  let answer = 1;
  let bridgeWeight = truck_weights[0];
  const curBridge = [{ truckWeight: truck_weights.shift(), second: 0 }];

  while (truck_weights.length || curBridge.length) {
    const curTruck = truck_weights[0];
    if (bridge_length > curBridge.length && bridgeWeight + curTruck <= weight) {
      const truckWeight = truck_weights.shift();
      curBridge.push({ truckWeight, second: 0 });
      bridgeWeight += truckWeight;
    }
    curBridge.map(truck => truck.second++);
    if (curBridge[0].second >= bridge_length) {
      bridgeWeight -= curBridge[0].truckWeight;
      curBridge.shift();
    }
    answer++;
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));

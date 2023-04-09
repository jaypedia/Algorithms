// Apr 9, 2023
// https://school.programmers.co.kr/learn/courses/30/lessons/176962

function solution(plans) {
  const queue = plans
    .map((plan) => {
      const [subject, startTime, playTime] = plan;
      const [hour, minute] = startTime.split(':');
      const startMinute = Number(hour) * 60 + Number(minute);
      return [subject, startMinute, Number(playTime)];
    })
    .sort((a, b) => a[1] - b[1]);

  const finishedAssignment = [];

  const firstAssignment = queue.shift();
  let curTime = firstAssignment[1];
  const stack = [firstAssignment];

  while (queue.length) {
    const assignment = queue.shift();
    const [_subject, startTime, _playTime] = assignment;
    let timeDiff = startTime - curTime;
    curTime = startTime;

    while (stack.length && timeDiff > 0) {
      const recentAssignment = stack.pop();
      const [subject, _startTime, playTime] = recentAssignment;

      if (playTime <= timeDiff) {
        finishedAssignment.push(subject);
        timeDiff -= playTime;
      } else {
        recentAssignment[2] = playTime - timeDiff;
        timeDiff = 0;
        stack.push(recentAssignment);
      }
    }

    stack.push(assignment);
  }

  while (stack.length) {
    const subject = stack.pop()[0];
    finishedAssignment.push(subject);
  }

  return finishedAssignment;
}

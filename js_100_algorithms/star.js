// 2021-10-12
// Stars with for statement & repeat()

// Triangle
function star(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
  }
}

function star(n) {
  let star = '';
  for (let i = 1; i <= n; i++) {
    star += '*';
    console.log(star);
  }
}

function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i * 2; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// Rectangular
function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// Reversed Triangle
function star(n) {
  for (let i = n; i > 0; i--) {
    console.log('*'.repeat(i));
  }
}

function star(n) {
  let star = '';
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

// Tree Shape
function star(n) {
  let star = '';
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      star += ' ';
    }
    for (let k = 0; k <= i * 2; k++) {
      star += '*';
    }
    star += '\n';
  }
  console.log(star);
}

function star(n) {
  let tree = '';
  for (let i = 1; i <= n; i++) {
    let star = '';
    for (let j = 1; j <= n - i; j++) {
      star += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      star += '*';
    }
    tree += star + '\n';
  }
  console.log(tree);
}

// 2021-10-15 with repeat()
function treeStar(n) {
  let star = '';
  for (let i = 0; i < n * 2; i += 2) {
    star += ' '.repeat(n - i / 2) + '*'.repeat(i + 1);
    star += '\n';
  }
  console.log(star);
}

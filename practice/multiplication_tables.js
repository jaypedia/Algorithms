// 2021-10-15
// Multiplication tables : Nested for statement practice

// 1️⃣ Odd Numbers Multiplication Tables
// All three below output the same result.
for (let i = 1; i < 10; i++) {
  if (!(i % 2)) continue;
  for (let j = 1; j < 10; j++) {
    if (!(j % 2)) continue;
    console.log(`${i} * ${j} =`, i * j);
  }
}

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    if (!(i % 2) || !(j % 2)) continue;
    console.log(`${i} * ${j} =`, i * j);
  }
}

for (let i = 1; i < 10; i += 2) {
  for (let j = 1; j < 10; j += 2) {
    console.log(`${i} * ${j} =`, i * j);
  }
}

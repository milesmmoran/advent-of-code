// --- Day 3: Rucksack Reorganization ---

export default (input: string[]) => {
  const uAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let points = 0;
  input.forEach(line => { 
    const length = line.length;
    const first = Array.from(line.slice(0, length / 2));
    const second = Array.from(line.slice(length / 2, length));

    let used = [];

    first.forEach(a => {
      if (!used.includes(a) && second.includes(a)){
        let point = 0;
        if (lAlphabet.includes(a)) {
          point = lAlphabet.indexOf(a) + 1
        } else {
          point = uAlphabet.indexOf(a) + 1 + 26
        }
        console.log(a, point)
        points += point;
        used.push(a);
      }
    })

    console.log('-'.repeat(20))
  })

  return points;
};


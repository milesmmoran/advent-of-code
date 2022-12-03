// --- Day 3: Rucksack Reorganization ---

export default (input: string[]) => {
  const uAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let points = 0;
  let load: string[][] = [];
  input.forEach((line, i) => {
    const a = i % 3;
    if (a === 0) {
      load = [];
    }

    load.push(Array.from(line));

    if (load.length === 3) {
      console.log(load);
      const first = load[0];
      const second = load[1];
      const third = load[2];

      for (const a of first) {
        if (second.includes(a) && third.includes(a)) {
          let point = 0;
          if (lAlphabet.includes(a)) {
            point = lAlphabet.indexOf(a) + 1;
          } else {
            point = uAlphabet.indexOf(a) + 1 + 26;
          }
          console.log("adding point", point);
          points += point;
          console.log(a, point);
          console.log(points);
          break;
        }
      }
    }
  });

  return points;
};

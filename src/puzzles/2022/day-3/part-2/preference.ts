// --- Day 3: Rucksack Reorganization ---

export default (input: string[]) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  let points = 0;
  let load: string[][] = [];
  const groupSize = 3;
  input.forEach((line, i) => {
    const positionInGroup = i % groupSize;
    if (positionInGroup === 0) {
      load = [];
      // Could continue here
    }

    load.push(Array.from(line));

    if (positionInGroup === groupSize - 1) {
      const first = load[0];
      const second = load[1];
      const third = load[2];

      for (const letter of first) {
        if (second.includes(letter) && third.includes(letter)) {
          if (uppercase.includes(letter)) {
            points += uppercase.indexOf(letter) + 1 + 26;
          } else {
            points += lowercase.indexOf(letter) + 1;
          }
          break;
        }
      }
    }
  });

  return points;
};

// --- Day 3: Rucksack Reorganization ---

export default (input: string[]) => {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  let points = 0;
  let load: string[][] = [];
  input.forEach((line, i) => {
    load.push(Array.from(line));
    if (i % 3 === 2) {
      for (const letter of load[0]) {
        if (load[1].includes(letter) && load[2].includes(letter)) {
          uppercase.includes(letter) ? (points += uppercase.indexOf(letter) + 1 + 26) : (points += lowercase.indexOf(letter) + 1);
          break;
        }
      }
      load = [];
    }
  });
  return points;
};

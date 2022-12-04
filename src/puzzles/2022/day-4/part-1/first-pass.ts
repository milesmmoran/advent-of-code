// --- Day 4: Camp Cleanup ---

export default (input: string[]) => {
  let count = 0;
  input.forEach(line => {
      const split = line.split(',');
      const aSplit = split[0].split('-')
      const bSplit = split[1].split('-')
      const a1 = Number(aSplit[0])
      const a2 = Number(aSplit[1]);
      const b1 = Number(bSplit[0]);
      const b2 = Number(bSplit[1])

      if ((a1 <= b1 && a2 >= b2) || (b1 <= a1 && b2 >= a2)) {
          count++;
      }
      
  })
  return count;
};


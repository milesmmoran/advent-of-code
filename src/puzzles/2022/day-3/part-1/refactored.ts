// --- Day 3: Rucksack Reorganization ---

export default (input: string[]) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    let points = 0;
    input.forEach(line => { 
      const length = line.length;
      const half = length / 2;
      const first = Array.from(line.slice(0, half));
      const second = Array.from(line.slice(half, length));
  
      let used = [];
  
      first.forEach(a => {
        if (!used.includes(a) && second.includes(a)){
          if (uppercase.includes(a)) {
            points += uppercase.indexOf(a) + 1 + 26
          } else {
            points += lowercase.indexOf(a) + 1
          }
          used.push(a);
        }
      })  
    })
  
    return points;
  };
  
  
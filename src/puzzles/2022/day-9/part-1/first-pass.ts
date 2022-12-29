// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    const past = {};
    const isAdjacent = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      return Math.abs(a.x - b.x) <= 1 && Math.abs(a.y - b.y) <= 1;
    };
  
  
    const currentHead = {
      x: 0,
      y: 0,
    };
    let tail = {...currentHead}
  
    input.forEach((line) => {
      console.log(line);
      const split = line.split(" ");
      const direction = split[0];
      const distance = Number(split[1]);
  
      for (let i = 0; i < distance; i++) {
        if (direction === "U") {
          currentHead.y++;
        } else if (direction === "D") {
          currentHead.y--;
        } else if (direction === "R") {
          currentHead.x++;
        } else if (direction === "L") {
          currentHead.x--;
        }
  
        if (isAdjacent(currentHead, tail)) {
          console.log('ADJACENT');
        } else {
          console.log('NOT ADJACENT');
          // console.log("NOT ADJACENT");
          if (direction === "U") {
            tail = {
              x: currentHead.x,
              y: currentHead.y - 1,
            }
          } else if (direction === "D") {
            tail = {
              x: currentHead.x,
              y: currentHead.y + 1,
            }
          } else if (direction === "R") {
            tail = {
              x: currentHead.x - 1,
              y: currentHead.y,
            }
          } else if (direction === "L") {
            tail = {
              x: currentHead.x + 1,
              y: currentHead.y,
            }
          }
        }
        past[`${tail.x},${tail.y}`] = true;
        console.log("HEAD", currentHead);
        console.log("TAIL", tail);
      }
  
    });
  
    return Object.keys(past).length
}


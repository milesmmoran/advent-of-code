const dev = (input: string[]) => {
    const m = 20;
    const logGraph = (
      points: {
        x: number;
        y: number;
      }[]
    ) => {
      console.log("------------------------");
    
      for (let y = m; y > m * -1; y--) {
        for (let x = m * -1; x < m; x++) {
          const point = points.findIndex((p) => p.x === x && p.y === y);
          if (point !== -1) {
            if (point === 0) {
              process.stdout.write(" H ");
            } else {
              process.stdout.write(` ${point.toString()} `);
            }
          } else if (x === 0 && y === 0) {
            process.stdout.write(" S ");
          } else {
            process.stdout.write(" . ");
          }
        }
        process.stdout.write("\n");
      }
      console.log("------------------------");
    };
    
    const logSolution = (
      points: {
        x: number;
        y: number;
      }[]
    ) => {
      console.log("------------------------");
    
      for (let y = m; y > m * -1; y--) {
        for (let x = m * -1; x < m; x++) {
          const point = points.findIndex((p) => p.x === x && p.y === y);
          if (x === 0 && y === 0) {
            process.stdout.write(" S ");
          } else if (point !== -1) {
            process.stdout.write(` # `);
          } else {
            process.stdout.write(" . ");
          }
        }
        process.stdout.write("\n");
      }
      console.log("------------------------");
    };
    const past: {
      [key: string]: {
        x: number;
        y: number;
      };
    } = {};
    const isAdjacent = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      return Math.abs(a.x - b.x) <= 1 && Math.abs(a.y - b.y) <= 1;
    };
  
    const currentHead = {
      x: 0,
      y: 0,
    };
  
    const knots = {
      0: { ...currentHead },
      1: { ...currentHead },
      2: { ...currentHead },
      3: { ...currentHead },
      4: { ...currentHead },
      5: { ...currentHead },
      6: { ...currentHead },
      7: { ...currentHead },
      8: { ...currentHead },
      9: { ...currentHead },
    };
  
    input.forEach((line) => {
      const split = line.split(" ");
      const direction = split[0];
      const distance = Number(split[1]);
  
      for (let i = 0; i < distance; i++) {
        if (direction === "U") {
          knots[0].y++;
        } else if (direction === "D") {
          knots[0].y--;
        } else if (direction === "R") {
          knots[0].x++;
        } else if (direction === "L") {
          knots[0].x--;
        }
  
        for (let k = 1; k < 10; k++) {
          const currentHead = { ...knots[k - 1] };
          const currentKnot = { ...knots[k] };
  
          const isAdjacentToHead = isAdjacent(currentHead, currentKnot);
  
          const xDiff = currentHead.x - currentKnot.x;
          const yDiff = currentHead.y - currentKnot.y;
  
          if (isAdjacentToHead) {
            knots[k] = { ...currentKnot };
            // console.log("ADJACENT TO HEAD");
          } else {
            // console.log(k, "NOT ADJACENT");
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
              if (xDiff > 0) {
                knots[k] = {
                  x: currentHead.x - 1,
                  y: currentHead.y,
                };
              } else {
                knots[k] = {
                  x: currentHead.x + 1,
                  y: currentHead.y,
                };
              }
            } else if (Math.abs(xDiff) < Math.abs(yDiff)) {
              if (yDiff > 0) {
                knots[k] = {
                  x: currentHead.x,
                  y: currentHead.y - 1,
                };
              } else {
                knots[k] = {
                  x: currentHead.x,
                  y: currentHead.y + 1,
                };
              }
            } else{
              if (yDiff < 0) {
                knots[k].y--;
              } else {
                knots[k].y++;
              }
              if (xDiff < 0) {
                knots[k].x--;
              } else {
                knots[k].x++;
              }
            }
          }
  
          if (k === 9) {
            console.log("A", knots[k]);
            past[`${knots[k].x},${knots[k].y}`] = knots[k];
          }
        }
      }
      console.log(line);
      // logGraph(Object.values(knots));
    });
  
    const points = Object.values(past);
    console.log(JSON.stringify(past, null, 2));
    logSolution(points);
  
    return points.length;
  };
  
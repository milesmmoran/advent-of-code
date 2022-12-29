// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    let cycle = 0;
    let signalStrengthSum = 0;
    let x = 1;
  
    const Cycle = ()=> {
      cycle += 1;
      const addSignalStrength = (20 + cycle) % 40 === 0 || cycle === 20;
  
      if (addSignalStrength) {
        console.log('ADD SIGNAL STRENGTH @ CYCLE', cycle)
        console.log('x', x)
        signalStrengthSum += x * cycle;
      }
    }
    for (let i = 0; i < input.length; i++) {
      const line = input[i];
  
      if (line.includes("noop")) {
        Cycle();
      }
      
      if (line.includes("addx")) {
        const split = line.split(" ");
        Cycle();
        Cycle();
        x += Number(split[1]);
      }
  
    }
    return signalStrengthSum;
}


import { readFileSync } from "fs";

const filename = `${__dirname}/input.txt`;

const dev = (input: string[]) => {
  let cycle = 1;
  let x = 1;
  let art = '';
  let line = '';
  const Cycle = ()=> {
    const t = [x - 1, x , x + 1]
    if (t.includes(cycle % 40)){
      line += '#'
    } else {
      line += '.'
    }


    const addSignalStrength = cycle % 40 === 0;

    if (addSignalStrength) {
      console.log('ADD SIGNAL STRENGTH @ CYCLE', cycle)
      art += `${line}\n`;
      line = '';
    }
    cycle += 1;

  }

  for (let i = 0; i < input.length; i++) {
    const line = input[i];

    if (line.includes("noop")) {
      Cycle();
    }
    
    if (line.includes("addx")) {
      const split = line.split(" ");
      Cycle();
      x += Number(split[1]);
      Cycle();
    }

  }
  return art;
};

const input = readFileSync(filename).toString("utf-8").split("\n");

const solution = dev(input);

console.log("-".repeat(80));
console.log(solution);
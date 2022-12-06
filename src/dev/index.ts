import { readFileSync } from "fs";

const filename = `${__dirname}/input.txt`;

const dev = (input: string[]) => {
  const split = input[0];
  // this works but doesnt work.
  for (let i = 14; i < split.length -1; i++) {
    const word = split.substring(i - 14, i);
    const set = new Set(Array.from(word));
    if(set.size === word.length){
        console.log(i, word)
        break;
    }

    console.log(word, set)
  }
};

const input = readFileSync(filename).toString("utf-8").split("\n");

const solution = dev(input);

console.log(solution);

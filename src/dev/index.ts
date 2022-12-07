import { readFileSync } from "fs";

const filename = `${__dirname}/input.txt`;
const dev = (input: string[]) => {
  return 'a';

};

const input = readFileSync(filename).toString("utf-8").split("\n");

const solution = dev(input);

console.log('-'.repeat(80))
console.log(solution);

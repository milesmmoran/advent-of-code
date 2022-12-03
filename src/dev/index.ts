import { readFileSync } from "fs";

const filename = `${__dirname}/input.txt`;

const dev = (input: string[]) => {
    const solution = 'a';

    return solution;
}


const input = readFileSync(filename).toString("utf-8").split("\n");

const solution = dev(input);

console.log(solution);

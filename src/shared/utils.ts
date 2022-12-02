import { readFileSync } from "fs";

const BASE_BAR_LENGTH = 30;

const header = 'SOLUTION';


export const read = (filename: string) => {
    const data = readFileSync(filename).toString("utf-8");
    return data.split("\n");
};

export const displaySolution = (solution: string) => {
    console.log('-'.repeat(BASE_BAR_LENGTH/2) + header +  '-'.repeat(BASE_BAR_LENGTH/2));
    console.log(solution)
    console.log('-'.repeat(BASE_BAR_LENGTH + header.length))
}
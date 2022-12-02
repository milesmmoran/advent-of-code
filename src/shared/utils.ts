import { readFileSync } from "fs";

const BASE_BAR_LENGTH = 30;

export const read = (filename: string) => {
    const data = readFileSync(filename).toString("utf-8");
    console.log(data)
    console.log('-'.repeat(BASE_BAR_LENGTH))
    return data;
};

export const displaySolution = (solution: string) => {
    const header = 'SOLUTION';
    console.log('-'.repeat(BASE_BAR_LENGTH/2) + header +  '-'.repeat(BASE_BAR_LENGTH/2));
    console.log(solution)
    console.log('-'.repeat(BASE_BAR_LENGTH + header.length))

}
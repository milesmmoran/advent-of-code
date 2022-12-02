// --- Day 1: Calorie Counting: Part 2 ---
import { resolve } from "path";
import { INPUT_FILE_NAME } from "../../../shared/constants";
import { displaySolution, read } from "../../../shared/utils";

const solution = (input: string[]) => {
    const elves: number[] = [];
    let currentLoad = 0;
    input.forEach((line) => {
        if (line === "") {
            currentLoad = 0;
        } else {
            const food = parseInt(line);
            currentLoad += food;
            elves.push(currentLoad);
        }
    })

    const sortedElves = elves.sort((a, b) => b - a);

    const solution = sortedElves[0] + sortedElves[1] + sortedElves[2];

    displaySolution(solution.toString())    
}

const input = read(resolve(__dirname, INPUT_FILE_NAME));
solution(input)
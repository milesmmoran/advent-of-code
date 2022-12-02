// --- Day 1: Calorie Counting: Part 1 ---
import { resolve } from "path";
import { INPUT_FILE_NAME } from "../../../shared/constants";
import { displaySolution, read } from "../../../shared/utils";

const solution = (input: string[]) => {
    let max = 0;
    let currentLoad = 0;
    input.forEach((line) => {
        if (line === "") {
            if (currentLoad > max) {
                max = currentLoad;
            }
            currentLoad = 0;
        } else {
            const food = parseInt(line);
            currentLoad += food;
        }
    })

    displaySolution(max.toString())    
}

const input = read(resolve(__dirname, INPUT_FILE_NAME));
solution(input)
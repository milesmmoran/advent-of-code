// --- Day 1: Calorie Counting ---
import { resolve } from "path";
import { INPUT_FILE_NAME } from "../../../shared/constants";
import { displaySolution, read } from "../../../shared/utils";

// // PART 1
// const solution = (input: string) => {
//     const inputSplitByNewline = input.split("\n")
//     let max = 0;
//     let currentLoad = 0;
//     inputSplitByNewline.forEach((line) => {
//         if (line === "") {
//             if (currentLoad > max) {
//                 max = currentLoad;
//             }
//             currentLoad = 0;
//         } else {
//             const food = parseInt(line);
//             currentLoad += food;
//         }
//     })

//     displaySolution(max.toString())    
// }

// const input = read(resolve(__dirname, INPUT_FILE_NAME));
// solution(input)

// PART 2
const solution = (input: string) => {
    const inputSplitByNewline = input.split("\n")
    const elves: number[] = [];
    let currentLoad = 0;
    inputSplitByNewline.forEach((line) => {
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
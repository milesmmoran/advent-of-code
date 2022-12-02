// --- Day 2: Rock Paper Scissors ---
import { resolve } from "path";
import { INPUT_FILE_NAME } from "../../../shared/constants";
import { displaySolution, read } from "../../../shared/utils";

const solution = (input: string[]) => {
    let points = 0;

    const pointMap = {
        'A X': 1 + 3,
        'A Y': 2 + 6,
        'A Z': 3 + 0,

        'B X': 1 + 0,
        'B Y': 2 + 3,
        'B Z': 3 + 6,

        'C X': 1 + 6,
        'C Y': 2 + 0,
        'C Z': 3 + 3,
    }

    input.forEach((line) => {
        const point = pointMap[line];
        points += point;
    })
    
    displaySolution(points.toString());
}

const input = read(resolve(__dirname, INPUT_FILE_NAME));
solution(input)

// const solution = (input: string[]) => {
//     let points = 0;

//     const pointMap = {
//         'A X': 3 + 0,
//         'A Y': 1 + 3,
//         'A Z': 2 + 6,

//         'B X': 1 + 0,
//         'B Y': 2 + 3,
//         'B Z': 3 + 6,

//         'C X': 2 + 0,
//         'C Y': 3 + 3,
//         'C Z': 1 + 6,
//     }

//     input.forEach((line) => {
//         const point = pointMap[line];
//         points += point;
//     })
    
//     displaySolution(points.toString());
// }

// const input = read(resolve(__dirname, INPUT_FILE_NAME));
// solution(input)
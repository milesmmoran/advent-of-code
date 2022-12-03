
import fs from "fs";
import { read } from "../shared/utils";

// I DON'T KNOW PROPER WAY OF WORKING WITH PATHS, THIS WILL DO FOR NOW
export const getYears = () => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/'
    const years = fs.readdirSync(path);
    return years;
}

export const getDays = (year: string) => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/' + year;
    const days = fs.readdirSync(path);
    return days;
}

export const getParts = (year: string, day: string) => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/' + year + '/' + day;
    const parts = fs.readdirSync(path).filter((part) => part !== 'input.txt');
    return parts;
}

export const getAlgorithms = (year: string, day: string, part: string) => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/' + year + '/' + day + '/' + part;
    const algorithms = fs.readdirSync(path);
    return algorithms;
}

export const getAlgorithm = async (year: string, day: string, part: string, algorithm: string) => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/' + year + '/' + day + '/' + part + '/' + algorithm;
    const module = await import(path);
    return module;
}

export const getInput = (year: string, day: string) => {
    const split = __dirname.split('/')
    split.pop();
    const path = split.join('/') + '/puzzles/' + year + '/' + day + '/input.txt';
    const input = read(path)
    return input;
}
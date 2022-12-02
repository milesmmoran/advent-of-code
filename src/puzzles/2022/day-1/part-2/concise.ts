// --- Day 1: Calorie Counting: Part 2 ---

export default (input: string[]) => {
    const elves: number[] = [];
    let currentLoad = 0;
    input.forEach((line) => {
        if (line === "") {
            elves.push(currentLoad);
            currentLoad = 0;
        } else {
            currentLoad += parseInt(line);
        }
    })

    const sortedElves = elves.sort((a, b) => b - a);

    return sortedElves[0] + sortedElves[1] + sortedElves[2];
}

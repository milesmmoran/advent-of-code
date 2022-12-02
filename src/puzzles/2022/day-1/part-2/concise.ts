// --- Day 1: Calorie Counting: Part 2 ---

export default (input: string[]) => {
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

    return sortedElves[0] + sortedElves[1] + sortedElves[2];
}

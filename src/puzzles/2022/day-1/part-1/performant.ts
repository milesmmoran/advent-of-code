// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
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


    return max;
}


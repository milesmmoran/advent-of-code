// --- Day 1: Calorie Counting: Part 2 ---

export default (input: string[]) => {
    console.log(input)
    console.log('----')
    const numbers = '0123456789';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    const rawGrid: {[key: string]: string[]} = {};
    const grid: {[key: string]: string[]} = {};
    let numbersFound = false;
    input.forEach((line) => {
        if (line === ''){
            console.log(grid);
            console.log('///')
            numbersFound = true;
        } else if (!numbersFound) {
            Array.from(line).forEach((char, i) => {
                if (alphabet.includes(char)){
                    if (Object.keys(rawGrid).includes(`${i}`)){
                        rawGrid[`${i}`].push(char);
                    } else {
                        rawGrid[`${i}`] = [char];
                    }
                }
                if (numbers.includes(char)){
                    grid[char] = rawGrid[i].reverse();
                }
            })
        } else {
            const command = line.split(' ');
            const quantity = Number(command[1]);
            const from = command[3];
            const to = command[5];

            const removed = grid[from].splice(grid[from].length - quantity, quantity);

            grid[to].push(...removed);

            // cmz
            console.log('removed', removed);


            console.log(quantity, from, to)
            console.log(JSON.stringify(grid, null, 2))

        }
    })
    let sol = '';
    Object.keys(grid).forEach((col) => {
        sol += grid[col][grid[col].length - 1];
    })
    return sol;
}

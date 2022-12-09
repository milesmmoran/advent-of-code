// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    const trees = input.map((line) => Array.from(line).map((char) => Number(char)));

    const width = trees[0].length;
    const height = trees.length;
    let scores = [];
    trees.forEach((row, y) => {
      row.forEach((col, x) => {
        const score = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        };
  
        console.log('>', x, y);
  
        for (let i = x - 1; i >= 0; i--) {
            score.left++;
          console.log(i, y, row[i])
          if (row[i] >= col) {
            break
          } 
        }
  
        for (let i = x + 1; i <= width - 1; i++) {
          score.right++;
          if (row[i] >= col) {
            break
          } 
        }
  
        for (let i = y - 1; i >= 0; i--) {
          // (i, y)
          score.top++;
  
          if (trees[i][x] >= col) {
            break
          } 
        }
  
        for (let i = y + 1; i <= height - 1; i++) {
          // (i, y)
          score.bottom++;
  
          if (trees[i][x] >= col) {
            break
          } 
        }
  
        console.log(col, score);
  
        scores.push(score);
      });
    });
    return scores.map((score) => score.left * score.right * score.top * score.bottom).sort((a, b) => b - a)[0];
}


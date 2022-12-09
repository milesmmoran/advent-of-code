// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    const trees = input.map(line => Array.from(line).map(char => Number(char)))


    const width = trees[0].length;
    const height = trees.length;
    let visibles = 0;
    trees.forEach((row, y)=> {
      row.forEach((col, x) => {
        const tree = col;
        console.log('----')
        console.log(x, y);
        if (x === 0 || x === width - 1 || y === 0 || y === height - 1) {
          visibles++;
        } else {
          const left = row.slice(0, x);
          const right = row.slice(x + 1, width); 
          const top = trees.map(ro => ro[x]).slice(0, y);
          const bottom = trees.map(ro => ro[x]).slice(y + 1, height);
  
          // console.log('left', left)
          // console.log('right', right)
          console.log('top', top)
          console.log('bottom', bottom)
  
  
  
          const leftMax = Math.max(...left);
          const rightMax = Math.max(...right);
          const topMax = Math.max(...top);
          const bottomMax = Math.max(...bottom);
  
          // console.log('leftMax', leftMax)
          // console.log('rightMax', rightMax)
          // console.log('topMax', topMax)
          // console.log('bottomMax', bottomMax)
  
          if (tree > leftMax || tree > rightMax || tree > topMax || tree > bottomMax) {
            visibles++;
            console.log('ADDED');
          }
          
        }
  
        // for (let l = 0; l <= j; l++) {
        //   console.log('l', j, l)
        // }
      })
    })
    console.log(visibles)
}


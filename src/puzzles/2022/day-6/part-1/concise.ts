// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    const split = input[0];
    // this works but doesnt work.
    for (let i = 4; i < split.length -1; i++) {
      const word = split.substring(i - 4, i);
      const set = new Set(Array.from(word));
      if(set.size === word.length){
          console.log(i, word)
          break;
      }
  
      console.log(word, set)
    }
}


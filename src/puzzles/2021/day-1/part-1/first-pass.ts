// --- Day 1: Sonar Sweep ---

export default (input: string[]) => {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (Number(input[i]) > Number(input[i - 1])) {
      count++;
    }
  }
  return count;
};

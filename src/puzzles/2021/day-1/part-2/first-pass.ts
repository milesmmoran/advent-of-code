// --- Day 1: Sonar Sweep ---

export default (input: string[]) => {
  let count = 0;
  for (let i = 3; i < input.length; i++) {
    if (Number(input[i - 2]) + Number(input[i - 1]) + Number(input[i]) > Number(input[i - 3]) + Number(input[i - 2]) + Number(input[i - 1])) {
      count++;
    }
  }
  return count;
};

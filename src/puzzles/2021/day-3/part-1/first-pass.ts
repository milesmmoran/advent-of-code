// --- Day 2: Dive! ---

export default (input: string[]) => {
    let delta = '';
    let epsilon = '';
    input[0].split('').forEach((_, i) => {
        let zero = 0;
        let one = 0;
        input.forEach(line => {
            line[i] === '0' ? zero++ : one++;
        })
        delta += zero > one ? '0' : '1';
        epsilon += zero < one ? '0' : '1';

    })
    // console.log(delta * epsilon)
    return parseInt(delta, 2) * parseInt(epsilon, 2)
  };
  
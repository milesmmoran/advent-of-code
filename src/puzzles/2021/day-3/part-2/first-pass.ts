// --- Day 2: Dive! ---

export default (input: string[]) => {
    let x = 0;
    let y = 0;
    let z = 0;
    
    const f = {
        'forward': (d: number) => {
            y += d;
            x += z * d;
        },
        'down': (d: number) => {
            z += d;
        },
        'up': (d: number) => {
            z += -d;
        }
    } as const;
    
    input.forEach((line) => {
        const split = line.split(' ');
        const direction = split[0];
        const distance = Number(split[1]);
        f[direction](distance);
    })
    
    return x * y;
  };
  
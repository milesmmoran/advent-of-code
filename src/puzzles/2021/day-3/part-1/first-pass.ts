// --- Day 2: Dive! ---

export default (input: string[]) => {
    let x = 0;
    let y = 0;

    const f = {
        'forward': (d: number) => {
            y += d;
        },
        'down': (d: number) => {
            x += d;
        },
        'up': (d: number) => {
            x += -d;
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
  
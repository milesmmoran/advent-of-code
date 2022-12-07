// --- Day 1: Calorie Counting: Part 1 ---

export default (input: string[]) => {
    const folders: Record<string, number> = {
    
    }
  
    const dirs: string[] = [];
    let currentPath: string[] = [];
    input.forEach((line, i) => {
      const split = line.split(" ");
      if (split[1] === 'ls'){
  
      } else if (split[1] === 'cd'){
        if (split[2] === '..'){
          currentPath.pop();
        } else {
          currentPath.push(split[2]);
        }
      } else {
        const size = Number(split[0])
        const name = split[1]
        if (!Number.isNaN(size)){
          let path = [...currentPath, name];
          path.pop();
          while (path.length > 0) {
            const p = path.join('/');
            if (folders[p]){
              folders[p] += size;
            } else { 
              folders[p] = size;
            }
            path.pop();
          }
        } else {
          const folderPath = [...currentPath, name].join('/');
          dirs.push(folderPath);
          console.log(line)
          // if (!folders[folderPath]){
          //   folders[folderPath] = folders[[...currentPath].join('/')]
          // }
        }
  
      }
    })
  
    console.log(folders)
  
    console.log('all dirs', dirs.length);
    console.log('cd dirs', Object.keys(folders).length)
  
    Object.keys(folders).forEach(dir => {
      if (!dirs.includes(dir)){
        console.log('missing', dir);
      }
    })
  
    const diffs: number[] = []
  
    const freeSpace = 70000000 - folders['/'];
  
    let total = 0;
    Object.values(
  folders
    ).forEach((storage) => {
      if (freeSpace + storage >= 30000000) {
        diffs.push(storage)
      }
    })
  
  
    console.log('diffs', diffs)
  
    return diffs.sort((a, b) => a - b)[0]
  
}


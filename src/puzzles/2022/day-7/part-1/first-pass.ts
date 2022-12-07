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
        // console.log('split', split)
        const size = Number(split[0])
        const name = split[1]
        if (!Number.isNaN(size)){
          let path = [...currentPath, name];
          path.pop();
          while (path.length > 1) {
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
  
    // console.log(folders)
  
    console.log('all dirs', dirs.length);
    console.log('cd dirs', Object.keys(folders).length)
  
    console.log('---')
    Object.keys(folders).forEach(dir => {
      // console.log('dir', dir)
      if (!dirs.includes(dir)){
        console.log('missing', dir);
      }
    })
  
    let total = 0;
    Object.values(
  folders
    ).forEach((storage) => {
      if (storage >= 70000000 - folders['/']) {
        total += storage;
      }
    })
    return total;
}


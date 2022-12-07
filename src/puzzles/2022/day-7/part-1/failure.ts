// const paths = [];

// let currentPath = [];

// const folders = {

// }

// console.log(input)
// input.forEach((line, i) => {
//     // console.log(line);
//     const depth = line.indexOf("-") / 2 + 1;
//     const isDirectory = line.includes("dir");
//     const name = line.split('- ')[1].split(' ')[0];
//     // console.log(depth, isDirectory ? 'dir' : 'file', name)
//     if (currentPath.length >= depth){
//       currentPath = currentPath.slice(0, depth - 1 );
//     }

    
//     currentPath.push(name);
//     paths.push([...currentPath]);

//     if (!isDirectory) {
//       currentPath.pop();

    //   let sPath = [...currentPath]
    //   while (sPath.length) {
    //     const size = Number(line.split('=')[1].split(')')[0]);
    //     const p = sPath.join('---');
    //     if (folders[p]){
    //       folders[p] += size;
    //     } else {
    //       folders[p] = size;
    //     }
    //     sPath.pop();
    //   }
      
      
//     }




    
//     console.log(depth, name, isDirectory ? 'dir' : 'file');
// });
// console.log('paths', paths)
// console.log(folders)
// let c = 0;
// Object.values(folders).forEach((v:number) => {
//   if (v <= 1000000) {
//     c += v;
//   }
// })
// console.log(c)
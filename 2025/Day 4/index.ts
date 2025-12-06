import input from './input.txt';

const rawData: string[] = input.split('\n');

const neighbors = (i: number, j: number, rows: string[]) => {
  let neighborCount: number = 0;
  let neighbors = [
    rows[i]?.[j + 1],
    rows[i]?.[j - 1],
    rows[i + 1]?.[j],
    rows[i - 1]?.[j],
    rows[i + 1]?.[j + 1],
    rows[i + 1]?.[j - 1],
    rows[i - 1]?.[j + 1],
    rows[i - 1]?.[j - 1],
  ]
  for (let k = 0; k < neighbors.length; k++) {
    console.log("neighbors[k]", neighbors[k]);
    if (neighbors[k] === '@') {
      neighborCount += 1;
      console.log("neighborCount", neighborCount);
    }
  }

  return neighborCount;
}

// console.log(neighbors(0, 0, rawData));

const findAts = (rows: string[]) => {
  console.log("rows", rows);
  let rolls: number = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i]?.[j] === '@') {
        const neighbs = (neighbors(i, j, rows))
        if (neighbs < 4) {
          rolls += 1;
        }
      }
    }
  }
  return rolls;
}
console.log(findAts(rawData));
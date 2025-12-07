import input from './input.txt';

const rawData = input.split('\n');

const source = rawData[0].indexOf('S');
let splits: number = 0;

let pipes = new Set([source]);
const processRow = (row: string) => {
  for (let i = 0; i < row.length; i++) {
    if (row[i] === '^') {
      if (pipes.has(i)) {
        splits += 1;
        pipes.add(i + 1)
        pipes.add(i - 1)
        pipes.delete(i)
      }
    }
  }
  return pipes;
}

const result = () => {
  for (let i = 1; i < rawData.length; i++) {
    processRow(rawData[i]);
  }
  return splits;
}

"1690 is too high"
"1579 is correct"
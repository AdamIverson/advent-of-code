import input from './input.txt';

const rawData = input.split('\n');


const rowParse = (row: string) => {
  let highest: number = 0
  let second: number = 0
  let index: number = 0
  let jindex: number = 0;
  for (let i = 0; i < row.length; i++) {
    if (Number(row[i]) > highest) {
      highest = Number(row[i]);
      index = Number(i);
    }
  }

  const adjustedIndex = (index: number) => {
    if (index + 1 === row.length) {
      return 0;
    }
    return index + 1;
  }

  for (let j = adjustedIndex(index); j < row.length; j++) {
    if (Number(row[j]) > second && j !== index) {
      second = Number(row[j]);
      jindex = Number(j);
    }
  }
  if (jindex > index) {
    return (highest * 10) + second;
  } else {
    return (second * 10) + highest;
  }
}

let total = 0;
for (const row of rawData) {
  total += rowParse(row);
}


"19755 is too high"
"17135 is incorrect"
"17095 is someone else's answer?"
"17090 is incorrect"
"17130 is incorrect"
"17085 is correct"
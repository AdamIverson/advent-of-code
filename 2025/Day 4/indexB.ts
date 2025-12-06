import input from './input.txt';


const rawData: string[] = input.split('\n');
console.log("rawData", rawData);
let processedRow: number[] = [];

const stringParse = (row: string): number[] => {
  processedRow = [];
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "@") {
      processedRow.push(1);
    }
    if (row[i] === ".") {
      processedRow.push(0);
    }
  }
  // console.log("processedRow", processedRow);
  return processedRow;
}

// console.log("stringParse(rawData[0])", stringParse(rawData[0]));
let processedRows: number[][] = [];

const fullSet = (rows: string[]) => {
  for (let i = 0; i < rows.length; i++) {
    const processedRow = stringParse(rawData[i]);
    processedRows.push(processedRow);
  }
  // console.log("processedRows", processedRows);
  return processedRows;
}
console.log("fullSet(rawData)", fullSet(rawData));

const a = (number: number): number => { return number + 1 }
const b = (number: number): number => { return number - 1 }


const atCount = (rows: number[][]) => {
  // console.log("rows", rows);
  let tempCount: number = 0;
  let rowCount: number = 0;
  // while (tempCount < 4) {
  for (let i = 0; i < rows.length; i++) {
    console.log("rows[i]", rows[i]);
    for (let j = 0; j < rows[i].length; j++) {
      // console.log("rows[i][j]", rows[i][j]);
      if (rows[i][j] === 1) {
        console.log("add")
        rowCount++;
        tempCount++;
      }
      if (rows[i]?.[j + 1] === 1) {
        tempCount++;
      }
      // if (rows[i + 1].at(j) === 1) {
      //   tempCount++;
      // }
      // if (rows[i + 1].at(j + 1) === 1) {
      //   tempCount++;
      // }
      // if (rows[i + 1].at(j - 1) === 1) {
      //   tempCount++;
      // }
      // if (rows[i - 1].at(j) === 1) {
      //   tempCount++;
      // }
      // if (rows[i - 1].at(j + 1) === 1) {
      //   tempCount++;
      // }
      // if (rows[i - 1].at(j - 1) === 1) {
      //   tempCount++;
      // }
      console.log("rowCount", rowCount);
      console.log("tempCount", tempCount);
    }
  }
  // }
  return tempCount;
}

// console.log("atCount(fullSet(rawData))", atCount(fullSet(rawData)));


// const theChain = (rows: string[]) => {
//   const theFeed = fullSet(rows);
//   console.log("theFeed", theFeed);

// atCount(theFeed);
// return;
// }

// const junkData: number[][] = [[1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];



// console.log("fullSet(rawData)", fullSet(rawData));
// console.log("atCount(fullSet(rawData))", atCount(fullSet(rawData)));
// console.log("atCount(junkData)", atCount(junkData));
// console.log("theChain(rawData)", theChain(junkData));

// console.log("atCount(fullSet(rawData))", atCount(fullSet(rawData as string[])));
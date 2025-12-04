import input from './input.txt';

const rows = input.split('\n');

const stringParse = (row: string) => {
  let processedRow: number[] = [];
  for (let i = 0; i < row.length; i++) {
    if (row[i] === "@") {
      processedRow.push(1);
    }
    if (row[i] === ".") {
      processedRow.push(0);
    }
  }
  return processedRow;
}

const fullSet = (rows: string[]) => {
  let processedRows: number[][] = [];
  for (let i = 0; i < rows.length; i++) {
    const processedRow = stringParse(rows[i]);
    processedRows.push(processedRow);
  }
  return processedRows;
}

console.log("fullSet(rows)", fullSet(rows));

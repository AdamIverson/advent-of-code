import input from './input.txt';

const rawData = input.split('\n').map(item => item.split(',').map(Number));
const numberData = rawData.map(item => item.map(Number));
// console.log("numberData", numberData);
const n = rawData.length;

const distanceProcessor = (pointA: number[], pointB: number[], indexA: number, indexB: number) => {
  // console.log("pointA", pointA);
  // console.log("pointB", pointB);
  const distance = Math.sqrt(Math.pow(pointA[0] - pointB[0], 2) + Math.pow(pointA[1] - pointB[1], 2) + Math.pow(pointA[2] - pointB[2], 2));
  // console.log("distance, indexA, indexB", distance, indexA, indexB);
  return { distance, indexA, indexB };
}


const shortestDistance = (distances: any[]) => {
  const shortest = distances.sort((a, b) => a.distance - b.distance)[0];
  return shortest;
}

const rowDistances = (row: number[], index: number) => {
  let distances = [];
  // console.log("row", row);
  // console.log("index", index);
  for (let i = index + 1; i < n; i++) {
    // console.log("i", i);
    const result = distanceProcessor(numberData[index], numberData[i], index, i);
    // console.log("result", result);
    distances.push(result);
  }
  // console.log("distances", distances);
  // Guard against empty distances array
  if (distances.length === 0) {
    return null;
  }
  const shortie = shortestDistance(distances);
  return shortie;
}

let circuits: number[][] = [];

let winner: number | null = null;

const winnerFinder = (rowMin: number) => {
  // console.log("rowMin", rowMin);
  if (rowMin) {
    // console.log("winner", winner);
    if (winner === null || rowMin < winner) {
      console.log("rowMin less than winner", rowMin, winner);
      winner = rowMin;
    } else if (winner !== null && rowMin > winner) {
      console.log("rowMin greater than winner", rowMin, winner);
    }
  }
};

const batchProcessor = (data: number[][]) => {
  // console.log("data", data);
  let rowMin = null;
  for (let i = 0; i < data.length; i++) {
    console.log("i", i);
    const rowMin = rowDistances(data[i], i);
    // console.log("rowMin", rowMin);
    winnerFinder(rowMin?.distance);
  }
}


console.log("batchProcessor", batchProcessor(numberData))
console.log("winner", winner);
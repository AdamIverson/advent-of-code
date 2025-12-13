import input from './input.txt';

type DistanceResult = {
  distance: number;
  indexA: number;
  indexB: number;
};

const numberData = input.split('\n').map(item => item.split(',').map(Number));
const n = numberData.length;

const distanceProcessor = (pointA: number[], pointB: number[], indexA: number, indexB: number): DistanceResult => {
  const distance = Math.sqrt(
    Math.pow(pointA[0] - pointB[0], 2) +
    Math.pow(pointA[1] - pointB[1], 2) +
    Math.pow(pointA[2] - pointB[2], 2)
  );
  return { distance, indexA, indexB };
}

const shortestDistance = (distances: DistanceResult[]): DistanceResult => {
  return distances.reduce((min, current) =>
    current.distance < min.distance ? current : min
  );
}

const rowDistances = (row: number[], index: number): DistanceResult | null => {
  const distances: DistanceResult[] = [];
  for (let i = index + 1; i < n; i++) {
    const result = distanceProcessor(numberData[index], numberData[i], index, i);
    distances.push(result);
  }

  if (distances.length === 0) {
    return null;
  }

  return shortestDistance(distances);
}

let winner: number | null = null;

const winnerFinder = (rowMin: number | undefined): void => {
  if (rowMin !== undefined && rowMin !== null) {
    if (winner === null || rowMin < winner) {
      console.log("rowMin less than winner", rowMin, winner);
      winner = rowMin;
    } else if (rowMin > winner) {
      console.log("rowMin greater than winner", rowMin, winner);
    }
  }
};

const batchProcessor = (data: number[][]): void => {
  for (let i = 0; i < data.length; i++) {
    console.log("i", i);
    const rowMin = rowDistances(data[i], i);
    winnerFinder(rowMin?.distance);
  }
}

batchProcessor(numberData);
console.log("winner", winner);
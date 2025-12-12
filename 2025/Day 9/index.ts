import input from './input.txt';

const rawData = input.split('\n')
const n = rawData.length;
const coordinateNums: number[][] = rawData.map(item => item.split(',').map(Number));
console.log("coordinateNums", coordinateNums);
let xDiff = 1;
let yDiff = 1;
let areas = [];
const largestArea: number[] = []

const diffFinder = (coords: number[]) => {
  areas = [];
  for (let i = 0; i < coordinateNums.length; i++) {
    // console.log("coordinateNums[i]", coordinateNums[i]);
    // for (let j = 1; j < coordinateNums.length; j++) {
    // console.log("i", i);
    // console.log("j", j);
    // console.log("coordinateNums[j]", coordinateNums[j]);
    let x = coords[0];
    let y = coords[1];
    let x2 = coordinateNums[i][0];
    let y2 = coordinateNums[i][1];
    // console.log("x", x);
    // console.log("y", y);
    // console.log("x2", x2);
    // console.log("y2", y2);
    if (Math.abs(x - x2) > 1) {
      xDiff = Math.abs(x - y);
    }
    if (Math.abs(y - y2) > 1) {
      yDiff = Math.abs(y - y2);
    }
    areas.push(xDiff * yDiff);
    areas.sort((a, b) => a - b);
  }
  const lastIndex = areas.length - 1;
  // largestArea.push(areas[lastIndex]);
  // console.log("largestArea", largestArea);
}

// console.log("coordinateNums[0]", coordinateNums[0]);
// console.log("diffFinder(coordinateNums[0])", diffFinder(coordinateNums[0]));
const bigGuy = (array: number[][]) => {
  for (let i = 0; i < array.length; i++) {
    diffFinder(array[i]);
  }
  console.log("areas", areas);
  console.log("largestArea", largestArea);
  return largestArea;
}

bigGuy(coordinateNums);
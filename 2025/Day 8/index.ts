import input from './input.txt';

const rawData = input.split('\n').map(item => item.split(',').map(Number));

// console.log("rawData", rawData);

const n = rawData.length;
let dataCopy = rawData
console.log("dataCopy", dataCopy);

const pairComparator = (pointA: number[], pointB: number[], index: number, jindex: number) => {
  const distance = Math.sqrt(Math.pow(pointA[0]! - pointB[0]!, 2) + Math.pow(pointA[1]! - pointB[1]!, 2) + Math.pow(pointA[2]! - pointB[2]!, 2));
  return { distance, index, jindex };
}

let distances = [];

const distanceProcessor = () => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      distances.push(pairComparator(rawData[i], rawData[j], i, j));
    }
  }
  return distances;
}

distanceProcessor();
console.log("distances", distances);
const lowestNumber = (array: any[]) => {
  if (dataCopy.length === 0) return;
  let min = array[0]?.distance;
  let intersection = { index: 0, jindex: 0 };
  for (let i = 1; i < dataCopy.length; i++) {
    if (distances[i].distance < min) {
      min = distances[i].distance;
      intersection = { index: distances[i].index, jindex: distances[i].jindex };
    }
  }
  console.log("intersection", intersection);
  console.log("min", min);
  return { min, intersection };
}

// console.log("lowestNumber", lowestNumber(distances));

const circuits = [];
const circuitProcessor = ({ index, jindex }) => {
  console.log("processing pair", [index, jindex]);
  for (let i = 0; i < circuits.length; i++) {
    if (!circuits[i].includes(index) && !circuits[i].includes(jindex)) {
      console.log("new pair", [index, jindex]);
      circuits.push([index, jindex]);
    } else if (circuits[i].includes(index) && !circuits[i].includes(jindex)) {
      console.log("index match")
      circuits[i].push(jindex);
    } else if (!circuits[i].includes(index) && circuits[i].includes(jindex)) {
      console.log("jindex match")
      circuits[i].push(index);
    } else if (circuits[i].includes(index) && circuits[i].includes(jindex)) {
      console.log("both match")
      continue;
    }
  }
  return circuits;
}
// console.log("circuitProcessor", circuitProcessor({ index, jindex }));
// console.log("circuits", circuits);
const findCircuits = () => {
  const removeLow = () => {
    for (let i = 0; i < 3; i++) {
      const lowest = lowestNumber(distances);
      console.log("lowest.intersection", lowest.intersection);
      // console.log("circuitProcessor", circuitProcessor(lowest.intersection));
      let filterA = dataCopy.filter(item => lowest.intersection.index === lowest.intersection.index);
      let filterB = dataCopy.filter(item => lowest.intersection.jindex === lowest.intersection.jindex);
      // console.log("dataCopy", dataCopy);
    }
  }
  removeLow();
  return circuits;
}

// console.log("findCircuits", findCircuits());
// console.log("dataCopy", dataCopy);
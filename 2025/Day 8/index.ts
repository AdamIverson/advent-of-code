import input from './input.txt';

type DistanceResult = {
  distance: number;
  indexA: number;
  indexB: number;
};

const numberData = input.split('\n').map(item => item.split(',').map(Number));
const n = numberData.length;
const num_iterations = 1000;

const distanceProcessor = (pointA: number[], pointB: number[], indexA: number, indexB: number): DistanceResult => {
  const distance = Math.sqrt(
    Math.pow(pointA[0] - pointB[0], 2) +
    Math.pow(pointA[1] - pointB[1], 2) +
    Math.pow(pointA[2] - pointB[2], 2)
  );
  return { distance, indexA, indexB };
}

let distances: DistanceResult[] = [];

let circuits: number[][] = [];
const circuitMaker = (indexA: number, indexB: number): void => {
  if (indexA === undefined || indexA === null || indexB === undefined || indexB === null) {
    return;
  }

  // Find which circuits contain indexA and indexB (if any)
  let circuitA: number[] | undefined;
  let circuitB: number[] | undefined;

  for (let i = 0; i < circuits.length; i++) {
    const circuit = circuits[i];
    if (circuit.includes(indexA)) {
      circuitA = circuit;
    }
    if (circuit.includes(indexB)) {
      circuitB = circuit;
    }
  }

  // Match Python's order: check both exist first, then single cases, then neither
  if (circuitA && circuitB) {
    if (circuitA !== circuitB) {
      // Merge circuitB into circuitA (no duplicate checks)
      circuitA.push(...circuitB);
      circuits = circuits.filter(c => c !== circuitB);
    }
    // If same circuit, do nothing (implicit)
  } else if (circuitA) {
    // Only indexA exists - add indexB (no duplicate check)
    circuitA.push(indexB);
  } else if (circuitB) {
    // Only indexB exists - add indexA (no duplicate check)
    circuitB.push(indexA);
  } else {
    // Neither exists - create new circuit
    circuits.push([indexA, indexB]);
  }
};

const batchProcessor = (data: number[][]): void => {
  // Populate distances array in batches to avoid blocking
  const populateDistances = () => {
    const batchSize = 10000; // Process 10k pairs at a time
    let i = 0;
    let j = 1;
    const totalPairs = (data.length * (data.length - 1)) / 2;

    const processChunk = () => {
      let processed = 0; // Reset counter for each chunk

      while (i < data.length && processed < batchSize) {
        if (j >= data.length) {
          i++;
          j = i + 1;
          if (i >= data.length) break;
        }
        if (j < data.length) {
          const result = distanceProcessor(data[i], data[j], i, j);
          distances.push(result);
          j++;
          processed++;
        }
      }

      // Log progress after each chunk
      const progress = ((distances.length / totalPairs) * 100).toFixed(1);
      console.log(`Populating distances: ${distances.length}/${totalPairs} (${progress}%)`);

      if (i < data.length) {
        setTimeout(processChunk, 0);
      } else {
        console.log("All distances populated, sorting...");
        // Sort distances by distance property (ascending)
        distances.sort((a, b) => a.distance - b.distance);
        console.log("Distances sorted, starting processing...");
        processBatch();
      }
    };

    processChunk();
  };

  // Process distances in batches
  let iterationCount = 0;
  const processBatch = () => {
    const batchSize = 1000;
    let processed = 0;

    while (distances.length > 0 && processed < batchSize && iterationCount < num_iterations) {
      // Get smallest distance (first element since array is sorted)
      const rowMin = distances[0];

      // Remove first element
      distances.shift();

      circuitMaker(rowMin.indexA, rowMin.indexB);
      iterationCount++;
      processed++;
    }

    // Log progress after each batch
    const progress = ((iterationCount / num_iterations) * 100).toFixed(1);
    console.log(`Processing: ${iterationCount}/${num_iterations} iterations (${progress}%), ${distances.length} distances remaining`);

    if (iterationCount < num_iterations && distances.length > 0) {
      setTimeout(processBatch, 0);
    } else {
      // Calculate final answer: product of 3 largest circuit lengths
      const sortedCircuits = circuits.sort((a, b) => b.length - a.length);
      const answer = sortedCircuits[0].length * sortedCircuits[1].length * sortedCircuits[2].length;
      console.log("Answer:", answer);
      console.log("Top 3 circuits:", sortedCircuits.slice(0, 3).map(c => c.length));
    }
  };

  if (distances.length === 0) {
    populateDistances();
  } else {
    processBatch();
  }
};

batchProcessor(numberData);
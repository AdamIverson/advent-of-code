import input from './input.txt';

const rawData = input.split(',')
let nummies = []

let data = [...rawData.map(item => item.split('-').map(Number))];
for (const item of data) {
  for (let i = item[0]; i <= item[1]; i++) {
    if (i[0] !== 0) {
      if (item.length % 2 === 0) {
        nummies.push(i.toString());
      }
    }
  }
}

const invalidNummies = [];

nummies.forEach(item => {
  let frontHalf = item.slice(0, item.length / 2);
  let backHalf = item.slice(item.length / 2, item.length);
  if (frontHalf === backHalf) {
    invalidNummies.push(item);
    return;
  }
  for (let segmentLength = 1; segmentLength < item.length / 2; segmentLength++) {
    if (item.length % segmentLength !== 0) continue;
    
    const firstSegment = item.slice(0, segmentLength);
    let allSegmentsMatch = true;
    
    for (let start = segmentLength; start < item.length; start += segmentLength) {
      const segment = item.slice(start, start + segmentLength);
      if (segment !== firstSegment) {
        allSegmentsMatch = false;
        break;
      }
    }
    
    if (allSegmentsMatch) {
      invalidNummies.push(item);
      return;
    }
  }
})
console.log("invalidNummies:", invalidNummies);

const finalNummies = invalidNummies.reduce((acc, item) => acc + Number(item), 0);
console.log("finalNummies:", finalNummies);
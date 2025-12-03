/// <reference path="../../types.d.ts" />
import input from './input.txt';
const dial = [...Array(100).keys()]
const combination = input.split('\n')
let zeroes: number = 0

function getRolloverItem(arr, index) {
  const len = arr.length;
  // Handle positive indexes: (index + len) is always positive, 
  // and modulo ensures it wraps around correctly.
  // Handle negative indexes: (index % len + len) ensures the result is positive
  // before the final modulo.
  const rolloverIndex = ((index % len) + len) % len;
  return arr[rolloverIndex];
}

let index: number = 50

const absoluteValue = (combination: string[]) => {
  for (const item of combination) {
    if (item.includes('R')) {
      const absValue = Math.abs(Number(item.slice(1)))
      index += absValue
      index = getRolloverItem(dial, index)
    } else if (item.includes('L')) {
      const absValue = -Math.abs(Number(item.slice(1)))
      index += absValue
      index = getRolloverItem(dial, index)
    }

    if (index === 0) {
      zeroes++
    }
  }
  return index;
}

absoluteValue(combination)

// Display result on the page
document.body.innerHTML = `
  <h1>Advent of Code</h1>
  <p>friggin zeroes: ${zeroes}</p>
`
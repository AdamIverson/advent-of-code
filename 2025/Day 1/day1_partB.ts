/// <reference path="../../types.d.ts" />
import input from './input.txt';
const dial = [...Array(100).keys()]
const combination = input.split('\n')
let zeroes: number = 0

function getRolloverItem(arr, index) {
  console.log("getRolloverItem", index)
  const len = arr.length;
  // Handle positive indexes: (index + len) is always positive, 
  // and modulo ensures it wraps around correctly.
  // Handle negative indexes: (index % len + len) ensures the result is positive
  // before the final modulo.
  const rolloverIndex = ((index % len) + len) % len;
  return arr[rolloverIndex];
}

let index: number = 50
let passes: number = 0

const absoluteValue = (combination: string[]) => {
  for (const item of combination) {
    if (item.includes('R')) {
      const difference = Number(item.slice(1))
      if (index + difference > 99) {
        passes += Math.floor((index + difference) / 100)
      }
      index += difference
      index = getRolloverItem(dial, index)
    } else if (item.includes('L')) {
      const difference = Number(item.slice(1))
      if (index - difference < 0) {
        passes += Math.abs(Math.floor((index - difference) / 100))
      }
      index -= difference
      index = getRolloverItem(dial, index)
    }

    if (index === 0) {
      zeroes++
    }
  }
  return index;
}

absoluteValue(combination)
console.log("zeroes", zeroes)
console.log("passes", passes)
const totes = passes + zeroes
// Display result on the page
document.body.innerHTML = `
  <h1>Advent of Code</h1>
  <p>friggin zeroes (b): ${totes}</p>

  <p>8255 is too high</p>
  <p>8203 is wrong</p>
  <p>7106 is wrong</p>
  <p>5953 is too low</p>
  <p>3597 is too low</p>
`
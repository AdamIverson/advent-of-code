/// <reference path="../../types.d.ts" />
import input from './input.txt'

let start = 50
let zeroes: number = 0

const array = input.split('\n')

for (const item of array) {
  if (item.includes('R')) {
    start += Number(item.slice(1))
    if (start === 0) {
      zeroes++
    }
  } else if (item.includes('L')) {
    start -= Number(item.slice(1))
    if (start === 0) {
      zeroes++
    }
  }
}
// Display result on the page
document.body.innerHTML = `
  <h1>Advent of Code</h1>
  <p>Progression: ${zeroes}</p>
`
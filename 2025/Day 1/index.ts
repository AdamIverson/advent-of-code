/// <reference path="../../types.d.ts" />
import input from './input.txt';
const combination = input.split('\n')
let zeroes: number = 0
let position: number = 50

const gdValue = (combination: string[]) => {
  for (const item of combination) {
    let startingPosition = position
    let direction = item[0]
    let fullDistance = Number(item.slice(1))
    let distance = fullDistance % 100
    zeroes += Math.floor(fullDistance / 100)

    if (direction === 'R' && (position + distance) > 99) {
      position = (position + distance) - 100
      if (startingPosition !== 0) {
        zeroes += 1
      }
    } else if (direction === 'R') {
      position += distance
      if (position === 0) {
        zeroes += 1
      }
    } else if (direction === 'L' && position - distance < 0) {
      position = 100 - Math.abs(position - distance)
      if (startingPosition !== 0) {
        zeroes += 1
      }
    } else if (direction === 'L') {
      position -= distance
      if (position === 0) {
        zeroes += 1
      }
    }
  }
  return zeroes;
}
console.log("zeroes", gdValue(combination))

document.body.innerHTML = `
  <h1>Advent of Code</h1>
  <p>friggin zeroes (b): ${zeroes}</p>

  <p>8255 is too high</p>
  <p>8203 is wrong</p>
  <p>7162 is wrong</p>
  <p>7113 is wrong</p>
  <p>7106 is wrong</p>
  <p>6946 is wrong</p>
  <p>5953 is too low</p>
  <p>3597 is too low</p>
`
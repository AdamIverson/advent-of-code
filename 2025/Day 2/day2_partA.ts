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
  }
})

const finalNummies = invalidNummies.reduce((acc, item) => acc + Number(item), 0);
console.log("finalNummies:", finalNummies);
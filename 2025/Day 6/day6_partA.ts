import input from './input.txt';

const rawData = input.split('\n');

const data = rawData.map(item => item.split(' ').filter(str => str !== ''));
const first = data[0].map(item => Number(item));
const second = data[1].map(item => Number(item));
const third = data[2].map(item => Number(item));
const fourth = data[3].map(item => Number(item));
const multiplier = data[4];

let total = 0;
for (let i = 0; i < data[0].length; i++) {
  let attempt = (first: number[], second: number[], third: number[], fourth: number[], multiplier: string[]) => {
    if (multiplier[i] === '*') {
      let result = first[i] * second[i] * third[i] * fourth[i];
      total += result
    } else if (multiplier[i] === '+') {
      let result = first[i] + second[i] + third[i] + fourth[i];
      total += result
    }
    return 0;
  }
  attempt(first, second, third, fourth, multiplier);
}

console.log("total", total);

"5175902529045 is too high"
"4693419406682 is correct"
"31754001390 is too low"

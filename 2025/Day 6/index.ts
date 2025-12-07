import input from './input.txt';

const rawData = input.split('\n');

console.log("INDEX")

const data = rawData.map(item => item.split(' ').filter(str => str !== ''));
const first = data[0].map(item => item);
const second = data[1].map(item => item);
const third = data[2].map(item => item);
const fourth = data[3].map(item => item);
const multiplier = data[4];

const digitBuilder = (one: string, two: string, three: string, four: string) => {
  console.log("one", one);
  console.log("two", two);
  console.log("three", three);
  console.log("four", four);
  for (let i = 0; i < 4; i++) {
    let firstDigit = one?.slice(-1);
    let secondDigit = two?.slice(-1);
    let thirdDigit = three?.slice(-1);
    let fourthDigit = four?.slice(-1);
    console.log("firstDigit", firstDigit);
    console.log("secondDigit", secondDigit);
    console.log("thirdDigit", thirdDigit);
    console.log("fourthDigit", fourthDigit);
    // console.log("Number", Number(`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`));
    return Number(`${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`.trim());
  }
}

let total = 0;
for (let i = 0; i < 1000; i++) {
  let attempt = (first: string[], second: string[], third: string[], fourth: string[], multiplier: string[]) => {
    // console.log("first[i], second[i], third[i], fourth[i]", first[i], second[i], third[i], fourth[i]);
    let total = 0;
    if (multiplier[i] === '*') {
      let result = [];
      for (let j = 0; j < 4; j++) {
        let subtotal = digitBuilder(first[j], second[j], third[j], fourth[j]);
        // console.log("subtotal", subtotal);
        result.push(subtotal);
      }
      console.log("result", result);
      // total += result[0] * result[1] * result[2] * result[3];
    }
    //  else if (multiplier[i] === '+') {
    //   let result = digitBuilder(first[i], second[i], third[i], fourth[i]);
    //   total += result
    // }
    // console.log("total", total);
    return total;
  }
  attempt(first, second, third, fourth, multiplier);
}

"1075128 is too low"
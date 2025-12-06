import input from './input.txt';

const rawData = input.split('\n\n');
const data = rawData.map(item => item.split('\n'));

const ranges = data[0];
const ingredients = data[1];
const rangeNumbers = ranges.map(range => range.split('-').map(Number));
const ingredientNumbers = ingredients.map(ingredient => Number(ingredient));

let isFresh = [];
for (const item of ingredientNumbers) {
  for (let i = 0; i < rangeNumbers.length; i++) {
    const range = rangeNumbers[i];
    if (item >= rangeNumbers[i][0] && item <= rangeNumbers[i][1]) {
      isFresh.push({ item, range });
      break;
    }
  }
}
console.log("isFresh", isFresh);
"964 is too high"
"963 is too high"
"770 is correct"



function findMinMax(arr) {
  if (!arr.length) { return {} }
  let ans = { min: arr[0], max: arr[0] }

  for (let i of arr) {
    if (i > ans.max) {
      ans.max = i;
    }
    if (i < ans.min) {
      ans.min = i;
    }
  }
  return ans;
}


let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.random())
}

console.log(arr)
console.log(findMinMax(arr))

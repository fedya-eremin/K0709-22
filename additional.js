function reverseString(str) {
  let result = "";
  for (let s of str) {
    result = s + result
  }
  return result;
}

console.log(reverseString("12321ab"))


function removeVowels(str) {
  const vowels = "aioue";
  let result = "";
  for (let s of str) {
    if (!vowels.includes(s)) {
      result += s;
    }
  }
  return result;
}

console.log(removeVowels("Hello, world!"))

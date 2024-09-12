let names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"]

for (let i in names) {
  console.log(`Студент ${names[i]}, ваш порядковый номер: ${i}`)
}

function findLongestName(names) {
  let result = names[0]
  for (let name of names) {
    if (name.length > result.length) {
      result = name
    }
  }
  return result
}

console.log(findLongestName(names))

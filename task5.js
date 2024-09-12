function formatDate(date) {
  let day = ('0' + date.getDate()).slice(-2);
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`
}

function dayDiff(date1, date2) {
  return Math.floor((date1 - date2) / (24 * 3600 * 1000))
}

console.log(formatDate(new Date()))
console.log(dayDiff(new Date(), new Date(0)))

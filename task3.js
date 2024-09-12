function displayUserInfo(user) {
  return `Имя: ${user.name}, Возраст ${user.age}, Email: ${user.email}`
}


let user = {
  name: "Alexander",
  age: 27,
  email: "alexander@outlook.com",
  greet: function() {
    return `Привет, ${this.name}`
  }
}

console.log(displayUserInfo(user))
console.log(user.greet())

// 1.  Управление пользователями и администраторами
// Условие:
// Создайте класс User, который имеет следующие свойства:
// name — имя пользователя.
// email — email пользователя.
// role — роль пользователя (по умолчанию user).
// 
// Добавьте методы:
// login(), который выводит сообщение "Пользователь [name] вошел в систему".
// logout(), который выводит сообщение "Пользователь [name] вышел из системы".
// 
// Создайте класс Admin, который наследует User и добавляет следующие методы:
// deleteUser(user), который выводит сообщение "Пользователь [name] был удален администратором [admin_name]".
// Создайте несколько объектов классов User и Admin.
// 
// Ожидаемый результат:
// Объект класса User может логиниться и выходить из системы.
// Объект класса Admin может удалять пользователей и выполнять те же действия, что и обычный пользователь.
class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role
  }

  login() {
    console.log(`Пользователь ${this.name} вошел в систему`)
  }

  logout() {
    console.log(`Пользователь ${this.name} вышел из системы`)
  }
}


class Admin extends User {
  deleteUser(user) {
    console.log(`Пользователь ${user.name} был удален админом ${this.name}`)
  }
}


const admin = new Admin("admin", "admin@example.org", "admin")
const plebey = new User("fedya", "fedya@example.org", "plebs")

console.log(admin)
console.log(plebey)
admin.login()
admin.logout()
plebey.login()
plebey.logout()
admin.deleteUser(plebey)

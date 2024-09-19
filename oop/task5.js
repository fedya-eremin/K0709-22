// 5. Иерархия домашних животных
// Условие:
// Создайте абстрактный класс Pet, который будет представлять домашнее животное с методами:
// eat() — выводит сообщение "Животное ест".
// makeSound() — метод, который должен быть переопределен в классах-наследниках.
// Создайте классы Dog и Cat, которые наследуют Pet.
//
// Переопределите метод makeSound() для каждого класса:
// Для Dog — выводит "Собака лает".
// Для Cat — выводит "Кошка мяукает".
// Добавьте метод sleep() для каждого питомца, который выводит сообщение о том, что питомец спит.
//
// Создайте объекты для каждого класса и вызовите методы eat(), makeSound() и sleep().
//
// Ожидаемый результат:
// Объекты классов Dog и Cat корректно переопределяют метод makeSound().
// Методы eat() и sleep() работают для каждого питомца.

class Pet {
  constructor() {
    if (this.constructor == Pet) {
      throw new error("abstract");
    }
  }
  eat() {
    console.log("Животное ест");
  }
  makeSound() {
    throw new Error("abstract");
  }
}

class Dog extends Pet {
  makeSound() {
    console.log("Собака лает");
  }
  sleep() {
    console.log("Собака спит");
  }
}

class Cat extends Pet {
  makeSound() {
    console.log("Кошка мяукает");
  }
  sleep() {
    console.log("Кошка спит");
  }
}

const dog = new Dog();
dog.eat();
dog.makeSound();
dog.sleep();

const cat = new Cat();
cat.eat();
cat.makeSound();
cat.sleep();

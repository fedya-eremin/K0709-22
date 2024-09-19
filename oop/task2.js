// 2. Кассовый аппарат
// Условие:
// Создайте класс Product, который будет представлять товар с характеристиками:
// name — название товара.
// price — цена товара.
//
// Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
// addProduct(product, quantity) — добавляет товар в корзину.
// removeProduct(product) — удаляет товар из корзины.
// getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
// checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.
//
// Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.
//
// Ожидаемый результат:
// Можно добавлять и удалять товары из корзины.
// Корзина корректно рассчитывает общую стоимость товаров.
// Метод checkout() выводит итоговый список покупок и очищает корзину.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Order() {
  this.products = [];
}

Order.prototype.addProduct = function (product, quantity) {
  for (let i = 0; i < quantity; i++) {
    this.products.push(product);
  }
};

Order.prototype.removeProduct = function (product) {
  for (let i in this.products) {
    if (this.products[i] == product) {
      this.products.splice(i, 1);
      break;
    }
  }
};

Order.prototype.getTotalPrice = function () {
  let sum = 0;
  for (let i of this.products) {
    sum += i.price;
  }
  return sum;
};

Order.prototype.checkout = function () {
  for (let product of this.products) {
    console.log(product.name);
  }
  console.log(this.getTotalPrice());
  this.products = [];
};

const p1 = new Product("Apple", 1);
const p2 = new Product("Orange", 1);
const p3 = new Product("Peach", 1);
const cart = new Order();
cart.addProduct(p1, 3);
cart.addProduct(p2, 1);
cart.addProduct(p3, 2);
console.log(cart.products);
cart.removeProduct(p1);
console.log(cart.products);
cart.checkout();

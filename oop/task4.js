// 4. Задача: Система онлайн-заказов
// Условие:
// Создайте классы для системы онлайн-заказов:
// Customer — представляет покупателя с именем и email.
// Order — представляет заказ и содержит:
// Список товаров (объекты класса Product).
// Сумму заказа.
// Покупателя, оформившего заказ (объект класса Customer).
//
// Создайте класс Product, который имеет свойства:
// name — название товара.
// price — цена товара.
//
// Класс Order должен иметь методы:
// addProduct(product, quantity) — добавляет товар в заказ.
// calculateTotal() — рассчитывает итоговую сумму заказа.
// printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.

function Customer(name, email) {
  this.name = name;
  this.email = email;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Order(customer) {
  this.products = [];
  this.price = 0;
  this.customer = customer;
}

Order.prototype.addProduct = function (product, quantity) {
  for (let i = 0; i < quantity; i++) {
    this.products.push(product);
    this.price += product.price;
  }
};

Order.prototype.calculateTotal = function () {
  return this.price;
};

Order.prototype.printOrder = function () {
  console.log(this);
};

const customer = new Customer("bom");
const order1 = new Order(customer);
order1.addProduct(new Product("a", 10), 1);

order1.printOrder();

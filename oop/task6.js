// 6. Математические выражения
// Условие:
// Создайте класс Expression, представляющий математическое выражение с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
// evaluate() — возвращает результат выражения.
// toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".
//
// Создайте подклассы для различных математических операций:
// Addition для сложения.
// Subtraction для вычитания.
// Multiplication для умножения.
// Division для деления (с проверкой деления на ноль).
// Создайте несколько объектов выражений и выведите результаты их вычислений.
//
// Ожидаемый результат:
// Каждый объект правильно вычисляет математическое выражение.
// Метод toString() корректно выводит информацию в формате "a op b = result".

function Expression(a, b, op) {
  this.a = a;
  this.b = b;
  this.op = op;
}

Expression.prototype.evaluate = function () {
  throw new Error("Метод evaluate() должен быть переопределен в подклассе.");
};

Expression.prototype.toString = function () {
  return `${this.a} ${this.op} ${this.b} = ${this.evaluate()}`;
};

function Addition(a, b) {
  Expression.call(this, a, b, "+");
}

Addition.prototype = Object.create(Expression.prototype);
Addition.prototype.constructor = Addition;

Addition.prototype.evaluate = function () {
  return this.a + this.b;
};

function Subtraction(a, b) {
  Expression.call(this, a, b, "-");
}

Subtraction.prototype = Object.create(Expression.prototype);
Subtraction.prototype.constructor = Subtraction;

Subtraction.prototype.evaluate = function () {
  return this.a - this.b;
};

function Multiplication(a, b) {
  Expression.call(this, a, b, "*");
}

Multiplication.prototype = Object.create(Expression.prototype);
Multiplication.prototype.constructor = Multiplication;

Multiplication.prototype.evaluate = function () {
  return this.a * this.b;
};

function Division(a, b) {
  Expression.call(this, a, b, "-");
}

Division.prototype = Object.create(Expression.prototype);
Division.prototype.constructor = Division;

Division.prototype.evaluate = function () {
  if (this.b === 0) {
    throw new Error("Ошибка: деление на ноль.");
  }
  return this.a / this.b;
};

const addition = new Addition(1, 1);
console.log(addition.toString());

const subtraction = new Subtraction(10, 4);
console.log(subtraction.toString());

const multiplication = new Multiplication(8, 7);
console.log(multiplication.toString());

const division = new Division(999, 0);
console.log(division.toString());

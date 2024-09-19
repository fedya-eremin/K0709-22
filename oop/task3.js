// 3. Библиотека
// Условие:
// Создайте класс Book, который будет представлять книгу с такими свойствами:
// title — название книги.
// author — автор книги.
// pages — количество страниц.
//
// Создайте класс Library, который управляет коллекцией книг. Этот класс должен иметь следующие методы:
// addBook(book) — добавляет книгу в библиотеку.
// findBooksByAuthor(author) — возвращает все книги данного автора.
// listAllBooks() — выводит список всех книг в библиотеке.
//
// Создайте класс LibraryUser, который может:
// Брать книгу на время (borrowBook(book)).
// Возвращать книгу в библиотеку (returnBook(book)).
// Каждый пользователь может одновременно иметь не более 3 книг. Если он пытается взять больше — программа должна выдавать ошибку.
//
// Ожидаемый результат:
// Пользователь может брать книги из библиотеки и возвращать их.
// Можно искать книги по автору и выводить список всех доступных книг.
// Ограничение на количество взятых книг работает корректно.

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
    this.library.push(book);
  }

  findBooksByAuthor(author) {
    return this.library.filter((elem) => elem.author === author);
  }

  listAllBooks() {
    console.log(this.library);
  }
}

class LibraryUser {
  constructor() {
    this.borrowed = [];
  }

  borrowBook(book) {
    if (this.borrowed.length >= 3) {
      throw new Error("You can't borrow more than 3 books!");
    }
    this.borrowed.push(book);
  }

  returnBook(book) {
    let ix = this.borrowed.indexOf(book);
    if (ix !== -1) {
      this.borrowed.splice(ix, 1);
      return;
    }
    throw new Error(`You didn't borrow this book: ${book}`);
  }
}

const library = new Library();
library.addBook(new Book("a", "a", 1));
library.addBook(new Book("b", "b", 2));
library.addBook(new Book("c", "c", 3));
console.log(library.findBooksByAuthor("a"));
library.listAllBooks();
const user = new LibraryUser();
user.borrowBook(library.library[0]);
user.borrowBook(library.library[0]);
user.borrowBook(library.library[0]);
user.returnBook(library.library[0]);
console.log(user.borrowed);

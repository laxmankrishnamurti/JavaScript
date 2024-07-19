/**
 * Activity 01
 */

//Task - 01

const book = {
  title: "vedanta",
  author: "Acharya Prashant",
  year: 2020,
};

console.log("book : ", book);

//Task - 02

console.log("title of the book : ", book.title);
console.log("author of the book : ", book.author);

/**
 * Activity 02
 */

//Task 03

book.getTitleAndAuthor = function () {
  return console.log(`Title is : ${this.title} and author is : ${this.author}`);
};

book.getTitleAndAuthor();

//Task 04

book.updateYear = function (year) {
  this.year = year;
  return console.log("Updated book value looks like : ", this);
};

book.updateYear(2024);

/**
 * Activiy 03
 */

//Task 05

const library = {
  name: "pathFinderLibrary",
  books: [
    {
      title: "Vedanta",
      author: "Acharya Prashant",
      year: 2021,
    },
    {
      title: "Geeta-vol-1",
      author: "Acharya Prashant",
      year: 2022,
    },
    {
      title: "Geeta-vol-2",
      author: "Acharya Prashant",
      year: 2023,
    },
    {
      title: "Geeta-vol-3",
      author: "Acharya Prashant",
      year: 2024,
    },
  ],
};

console.log("library info : ", library);

//Task 06

console.log("library name is : ", library.name);

const libraryBookList = library.books;

libraryBookList.forEach((book) => {
  console.log("Book litle is  : ", book.title);
});

//Task - 07

book.getTitleAndYear = function () {
  console.log(
    `book title is : ${this.title} and year of publishing the book is : ${this.year}`
  );
};

book.getTitleAndYear();

//Task 08

for (let key in book) {
  console.log(`property is : ${key} and value is : ${book[key]}`);
}

//Task 09

function getBookInfo() {
  let keys = Object.keys(book);
  let values = Object.values(book);

  for (let i = 0; i < keys.length; i++) {
    console.log(`title : ${keys[i]} and value is : ${values[i]}`);
  }
}

getBookInfo();

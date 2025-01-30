var books = require("../_mock/book");

const getBooks = () => {
  return books;
};

const createBook = (data) => {
  const newBook = {
    id: books.length + 1,
    title: data.title ? data.title : "No Title",
    author: data.author ? data.author : "No Author",
    type: data.type ? data.type : "No Type",
    publicationYear: data.publicationYear ? data.publicationYear : 0,
    remaining: 0,
    isAvailable: false,
  };
  books.push(newBook);
  return newBook;
};

const updateBook = (id, book) => {
  const entry = books.find((item) => item.id == id);
  if (book && entry) {
    entry.title = book.title ? book.title : entry.title;
    entry.author = book.author ? book.author : entry.author;
    entry.type = book.type ? book.type : entry.type;
    entry.publicationYear = book.publicationYear
      ? book.publicationYear
      : entry.publicationYear;
    return entry;
  }
  return null;
};

const deleteBook = (id) => {
  const index = books.findIndex((b) => b.id == id);
  if (index !== -1) {
    const book = books[index];
    books = books.filter((b) => b.id != id);
    return book;
  }
  return null;
};

const searchBooks = (query) => {
  const { title, type, publicationYear } = query;

  const filters = {
    title: title ? title : "",
    type: type ? type : "",
    publicationYear: publicationYear ? publicationYear : 0,
  };

  const search = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.type.toLowerCase().includes(filters.type.toLowerCase()) &&
      book.publicationYear >= filters.publicationYear
  );

  return search;
};

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
};

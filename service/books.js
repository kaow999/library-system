var books = require("../_mock/book");

/**
 * Retrieves the list of books.
 *
 * @returns {Array} The array of books.
 */
const getBooks = () => {
  return books;
};

/**
 * Creates a new book object and adds it to the books array.
 *
 * @param {Object} data - The data for the new book.
 * @param {string} [data.title="No Title"] - The title of the book.
 * @param {string} [data.author="No Author"] - The author of the book.
 * @param {string} [data.type="No Type"] - The type/genre of the book.
 * @param {number} [data.publicationYear=0] - The publication year of the book.
 * @returns {Object} The newly created book object.
 */
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

/**
 * Updates the details of a book with the given ID.
 *
 * @param {number|string} id - The ID of the book to update.
 * @param {Object} book - The book object containing updated details.
 * @param {string} [book.title] - The new title of the book.
 * @param {string} [book.author] - The new author of the book.
 * @param {string} [book.type] - The new type/genre of the book.
 * @param {number} [book.publicationYear] - The new publication year of the book.
 * @returns {Object|null} The updated book entry, or null if the book was not found or the update data is invalid.
 */
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

/**
 * Deletes a book from the books array by its ID.
 *
 * @param {number|string} id - The ID of the book to delete.
 * @returns {Object|null} - The deleted book object if found, otherwise null.
 */
const deleteBook = (id) => {
  const index = books.findIndex((b) => b.id == id);
  if (index !== -1) {
    const book = books[index];
    books = books.filter((b) => b.id != id);
    return book;
  }
  return null;
};

/**
 * Searches for books based on the provided query.
 *
 * @param {Object} query - The search query.
 * @param {string} [query.title] - The title of the book to search for.
 * @param {string} [query.type] - The type of the book to search for.
 * @param {number} [query.publicationYear] - The publication year of the book to search for.
 * @returns {Array} - An array of books that match the search criteria.
 *
 * @example
 * // Example usage:
 * const query = { title: 'Harry Potter', type: 'Fantasy', publicationYear: 1997 };
 * const results = searchBooks(query);
 * console.log(results);
 */
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

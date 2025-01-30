var express = require("express");
var router = express.Router();
/**
 * Retrieves all books from the library system.
 * @function getAllBooks
 */

/**
 * Creates a new book in the library system.
 * @function createBook
 */

/**
 * Updates an existing book in the library system.
 * @function updateBook
 */

/**
 * Deletes a book from the library system.
 * @function deleteBook
 */

/**
 * Searches for books in the library system based on given criteria.
 * @function searchBooks
 */
var {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
} = require("../controller/books");

router.get("/", getAllBooks);

router.post("/add", createBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.get("/search", searchBooks);

module.exports = router;

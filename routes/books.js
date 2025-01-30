var express = require("express");
var router = express.Router();
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

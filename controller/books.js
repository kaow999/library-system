var express = require("express");
var service = require("../service/books");
// const TOKEN = process.env.TOKEN;
const TOKEN = "TOKEN";

const getAllBooks = async (req, res) => {
  const token = req.headers.authorization;
  const books = service.getBooks();

  console.log(TOKEN, token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log("books", books);

  res.status(200).json(books);
};

const createBook = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const body = req.body;
    const books = service.getBooks();

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (token !== TOKEN) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (books.find((b) => b.title === body.title)) {
      return res.status(400).json({ message: "Book already exists" });
    }

    const create = service.createBook(body);
    res.status(201).json(create);
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};

const updateBook = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const body = req.body;
  const books = service.getBooks();

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (books.find((b) => b.id == id) == undefined) {
    return res.status(400).json({ message: "Book not found" });
  }

  const book = service.updateBook(id, body);
  res.status(200).json(book);
};

const deleteBook = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const books = service.getBooks();

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (books.find((b) => b.id == id) == undefined) {
    return res.status(400).json({ message: "Book not found" });
  }

  const book = service.deleteBook(id);
  res.status(200).json(book);
};

const searchBooks = async (req, res) => {
  const token = req.headers.authorization;
  const query = req.query;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const search = service.searchBooks(query);
  res.status(200).json(search);
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
};

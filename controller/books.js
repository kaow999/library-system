var express = require("express");
var service = require("../service/books");
// const TOKEN = process.env.TOKEN;
const TOKEN = "TOKEN";

// Controller function to get all books
const getAllBooks = async (req, res) => {
  // Extract token from request headers
  const token = req.headers.authorization;
  // Get all books from the service
  const books = service.getBooks();

  console.log(TOKEN, token);

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Validate the token
  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log("books", books);

  // Send the books as response
  res.status(200).json(books);
};

// Controller function to create a new book
const createBook = async (req, res) => {
  try {
    // Extract token from request headers
    const token = req.headers.authorization;
    // Extract book details from request body
    const body = req.body;
    // Get all books from the service
    const books = service.getBooks();

    // Check if token is provided
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Validate the token
    if (token !== TOKEN) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Check if the book already exists
    if (books.find((b) => b.title === body.title)) {
      return res.status(400).json({ message: "Book already exists" });
    }

    // Create a new book
    const create = service.createBook(body);
    // Send the created book as response
    res.status(201).json(create);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: "Error creating book", error });
  }
};

// Controller function to update an existing book
const updateBook = async (req, res) => {
  // Extract token from request headers
  const token = req.headers.authorization;
  // Extract book ID from request parameters
  const { id } = req.params;
  // Extract updated book details from request body
  const body = req.body;
  // Get all books from the service
  const books = service.getBooks();

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Validate the token
  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Check if the book exists
  if (books.find((b) => b.id == id) == undefined) {
    return res.status(400).json({ message: "Book not found" });
  }

  // Update the book
  const book = service.updateBook(id, body);
  // Send the updated book as response
  res.status(200).json(book);
};

// Controller function to delete a book
const deleteBook = async (req, res) => {
  // Extract token from request headers
  const token = req.headers.authorization;
  // Extract book ID from request parameters
  const { id } = req.params;
  // Get all books from the service
  const books = service.getBooks();

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Validate the token
  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Check if the book exists
  if (books.find((b) => b.id == id) == undefined) {
    return res.status(400).json({ message: "Book not found" });
  }

  // Delete the book
  const book = service.deleteBook(id);
  // Send the deleted book as response
  res.status(200).json(book);
};

// Controller function to search for books
const searchBooks = async (req, res) => {
  // Extract token from request headers
  const token = req.headers.authorization;
  // Extract search query from request query parameters
  const query = req.query;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Validate the token
  if (token !== TOKEN) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Search for books based on the query
  const search = service.searchBooks(query);
  // Send the search results as response
  res.status(200).json(search);
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  searchBooks,
};

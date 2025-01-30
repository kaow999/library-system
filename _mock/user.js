const books = require("./book");

const users = [
  {
    id: 1,
    name: "John Doe",
    books: [1, 3],
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "12345",
    },
    age: 30,
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    books: [2],
    address: {
      street: "456 Oak Ave",
      city: "Springfield",
      zip: "67890",
    },
    age: 25,
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "David Lee",
    books: [1, 2, 4],
    address: {
      street: "789 Pine Ln",
      city: "Riverdale",
      zip: "10112",
    },
    age: 35,
    email: "david.lee@example.com",
  },
  {
    id: 4,
    name: "Sarah Jones",
    books: [3],
    address: {
      street: "101 Elm St",
      city: "Hillside",
      zip: "13141",
    },
    age: 28,
    email: "sarah.jones@example.com",
  },
];
module.exports = users;

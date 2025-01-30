# Book API

This is a RESTful API for managing a collection of books. It's built using Express.js and provides endpoints for retrieving, creating, updating, deleting, and searching books.

## Technologies Used

- Node.js
- Express.js

## Installation

npm install

## Start the server:

npm start

http://localhost:3000/

## Authentication

This API uses token-based authentication. You must include a valid token in the `Authorization` header of your requests to access protected endpoints.

### Using the Token in Requests

Include the token in the `Authorization` header of your requests. The token should be prefixed with `Bearer` (or another scheme if applicable), although in this example, it expects simply the token string.

## LIST API Endpoints

GET /auth
GET /books
POST /books/add
PUT /books/:id
DELETE /books/:id
GET /books/search

## Usage

This API provides endpoints to manage books in a library system. Users can retrieve, add, update, delete, and search for books.

## Endpoints

### Books

#### Get All Books

```
GET /books
```

Retrieve a list of all books in the library.

**Response:**

```json
[
  {
    "id": "1",
    "title": "Book Title",
    "author": "Author Name",
    "isbn": "1234567890",
    "publishedDate": "2023-01-01"
  }
]
```

#### Get Book by ID

```
GET /books/{id}
```

Retrieve details of a specific book by its ID.

**Response:**

```json
{
  "id": "1",
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "1234567890",
  "publishedDate": "2023-01-01"
}
```

#### Add a New Book

```
POST /books
```

Add a new book to the library.

**Request Body:**

```json
{
  "title": "New Book Title",
  "author": "New Author Name",
  "isbn": "0987654321",
  "publishedDate": "2023-02-01"
}
```

#### Delete Book

```
DELETE /books/{id}
```

Delete a book from the library by its ID.

**Response:**

```json
{
  "message": "Book successfully deleted"
}
```

#### Search Books

```
GET /books/search
```

Search for books in the library based on given criteria.

**Query Parameters:**

- `title` (String, optional): Search term for the book title.
- `author` (String, optional): Search term for the author's name.
- `isbn` (String, optional): Search term for the book's ISBN.
- `publishedDate` (String, optional): Search term for the book's publication date.

**Response:**

```json
[
  {
    "id": "1",
    "title": "Book Title",
    "author": "Author Name",
    "isbn": "1234567890",
    "publishedDate": "2023-01-01"
  }
]
```

## Authentication

All endpoints require authentication via an API key. Include the API key in the request header:

```
Authorization: YOUR_API_KEY
```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of a request. Common status codes include:

- `200 OK`: The request was successful.
- `201 Created`: A new resource was successfully created.
- `400 Bad Request`: The request was invalid or cannot be served.
- `401 Unauthorized`: Authentication failed or user does not have permissions.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An error occurred on the server.

# EXAMPLE

GET /books

curl --location 'http://localhost:3000/books' \
--header 'Authorization: TOKEN'

POST /books/add

curl --location 'http://localhost:3000/books/add' \
--header 'Authorization: TOKEN' \
--header 'Content-Type: application/json' \
--data '{
"title": "Js 101"
}'

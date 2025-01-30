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

# Endpoints

# GET /

Description:

Retrieves all books from the library system.

Response:

200 OK: Returns an array of all books.

# POST /add

Description:

Creates a new book in the library system.

Request Body:

title (String, optional) - Title of the book (default: "No Title").

author (String, optional) - Author of the book (default: "No Author").

type (String, optional) - Type of the book (default: "No Type").

publicationYear (Number, optional) - Year of publication (default: 0).

Response:

201 Created: Returns the created book object.

# PUT /:id

Description:

Updates an existing book in the library system.

Request Parameters:

id (Number) - The ID of the book to update.

Request Body:

title (String, optional) - New title.

author (String, optional) - New author.

type (String, optional) - New type.

publicationYear (Number, optional) - New publication year.

Response:

200 OK: Returns the updated book object.

404 Not Found: If the book is not found.

# DELETE /:id

Description:

Deletes a book from the library system.

Request Parameters:

id (Number) - The ID of the book to delete.

Response:

200 OK: Returns the deleted book object.

404 Not Found: If the book is not found.

# GET /search

Description:

Searches for books in the library system based on given criteria.

Query Parameters:

title (String, optional) - Search term for title.

type (String, optional) - Search term for type.

publicationYear (Number, optional) - Minimum publication year.

Response:

200 OK: Returns an array of matching books.


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


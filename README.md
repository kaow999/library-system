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

## API Endpoints

GET /auth
GET /books
POST /books/add
PUT /books/:id
DELETE /books/:id
GET /books/search

# search -> /books/search?title=""&type=""&publicationYear=0

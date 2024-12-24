# Book App Backend 📚

This is the backend of the **Online Book Store** project. It's built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** for data storage.

## Demo

The backend can be tested with the frontend at [Book App Frontend Demo](https://online-book-store-frontend-beta.vercel.app/). The backend API endpoints are consumed by the frontend.

## Features

- Handle CRUD operations for books (Create, Read, Update, Delete).
- Handle user authentication and authorization.
- Store book details such as title, author, genre, and description.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js to handle routing.
- **MongoDB**: NoSQL database to store books and user data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT**: For secure authentication of users.
- **Bcrypt**: For hashing passwords.
- **CORS**: Used to enable cross-origin requests from the frontend to the backend, ensuring smooth communication between the two.

### API Routes

- **/api/books**: Handles requests related to books (e.g., fetching all books, adding a new book).
- **/api/orders**: Manages order-related functionalities (e.g., creating, updating, and retrieving orders).
- **/api/auth**: Manages user authentication (e.g., login, registration, token verification).
- **/api/admin**: Provides admin functionalities (e.g., managing users, books, and orders).

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/your-username/book-app-backend.git
  ```      
2. Navigate to the project folder:
  ```bash
  cd book-app-backend
  ```
3. Install dependencies:
  ```bash
  npm install
  ```
4. Create a .env file and add your environment variables:
  ```bash
  DB_URL=your_mongo_database_uri
  JWT_SECRET_KEY=your_jwt_secret_key
  ```
5. Start the server:
  ```bash
  npm start
  ```
6. By default, the server runs on http://localhost:5000.

## Contributing
Fork the repository.
Create your feature branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

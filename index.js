const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://online-book-store-frontend-beta.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Default Route
app.use("/", (req, res) => {
  res.send("Book Store Server is running!");
});

// Database Connection and Server Start
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongodb connected successfully!");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

main();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

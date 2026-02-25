const express = require("express");
const rootRouter = require("./src/controller/index");
const cors = require("cors");
const { connectDB } = require("./src/db/db");
require("dotenv").config();

const app = express();

// Enable CORS for all routes
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:3003",
  "http://localhost:3004", 
  "*",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log(`CORS error for origin: ${origin}`);
        return callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

app.use(express.json());
app.use("/", rootRouter);
connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

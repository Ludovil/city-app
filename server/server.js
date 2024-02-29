import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { createUser } from "./controllers/usersController.js";

// server
const app = express();
const PORT = process.env.PORT || 2000;

// database
const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;

// Middleware to parse JSON bodies
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${MONGO_NAME}:${MONGO_PW}@${MONGO_DB}.mongodb.net/cityapp`
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));

// thunderclient : get  http://localhost:2000
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the server" });
});

// thunderclient : post http://localhost:2000/users
app.post("/users", createUser);
app.listen(PORT, () => console.log("Server is running on PORT", PORT));

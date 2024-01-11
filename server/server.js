import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// server
const app = express();
const PORT = process.env.PORT || 3000;

// database
const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;

mongoose
  .connect(
    `mongodb+srv://${MONGO_NAME}:${MONGO_PW}@${MONGO_DB}.mongodb.net/cityapp`
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log("Server is running on PORT", PORT));

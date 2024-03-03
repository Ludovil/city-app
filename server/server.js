import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import usersRoute from "./routes/usersRoute.js";

// server
const app = express();
const PORT = process.env.PORT || 2000;

// database logs
const MONGO_NAME = process.env.MONGO_NAME;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;

// Middleware to parse JSON bodies
app.use(express.json());

// connect to database
mongoose
  .connect(
    `mongodb+srv://${MONGO_NAME}:${MONGO_PW}@${MONGO_DB}.mongodb.net/cityapp`
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));

// Connexion test
// thunderclient : get  http://localhost:2000
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the server" });
});

// routes
app.use("/users", usersRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => console.log("Server is running on PORT", PORT));

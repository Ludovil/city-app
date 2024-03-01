import express from "express";
import {
  createUser,
  getUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const router = express.Router();

// thunderclient : post http://localhost:2000/users
router.post("/", createUser);

// thunderclient : post http://localhost:2000/login
router.post("/login", loginUser);

// thunderclient : get http://localhost:2000/users/id
router.get("/:id", getUser);

// thunderclient : put http://localhost:2000/users/id
router.put("/:id", updateUser);

// thunderclient : delete http://localhost:2000/users/id
router.delete("/:id", deleteUser);

export default router;

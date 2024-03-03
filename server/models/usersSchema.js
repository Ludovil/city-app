import { Schema, model } from "mongoose";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  profile_image: {
    type: String,
  },
  profile_description: {
    type: String,
  },
  toilets: [{ type: Schema.Types.ObjectId, ref: "toilets" }],
});

const usersModel = model("users", userSchema);

export default usersModel;

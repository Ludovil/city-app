import { Schema, model } from "mongoose";

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

const UserCollection = model("users", userSchema);

export default UserCollection;

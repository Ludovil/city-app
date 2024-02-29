import UserCollection from "../models/usersSchema.js";

// Create (Post)
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = UserCollection(req.body);
    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
};
// Fetch (Get)
// Update (Put or Patch)
// Delete (Delete)

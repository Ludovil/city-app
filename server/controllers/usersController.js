import usersModel from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create User (Post)
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password, profile_description, toilets } =
      req.body;

    const profile_image = req.files.profile_image;
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(
      `./uploads/${profile_image.name}`,
      { folder: "berliner_klo/profile_images" }
    );

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new usersModel({
      username,
      email,
      password: hashedPassword,
      profile_image: cloudinaryResponse.secure_url,
      profile_description,
      toilets,
    });

    await user.save();
    res.json({ success: true, data: user });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
};

// login User (Post)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "This email does not exist",
      });
    }
    const verifyPassword = bcrypt.compareSync(password, user.password);
    if (!verifyPassword) {
      return res.json({
        success: false,
        message: "The password does not match",
      });
    }
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.SIGNATURE,
      { expiresIn: "1h", issuer: "Ludo" }
    );

    res.header("token", token).json({ success: true, data: user });
  } catch (err) {}
};

// Read User (Get)
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await usersModel.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Read all Users (Get)

// Update User (Put)
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      username,
      email,
      password,
      profile_image,
      profile_description,
      toilets,
      ...userData
    } = req.body;

    if (username) {
      userData.username = username;
    }

    if (email) {
      userData.email = email;
    }

    if (password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      userData.password = hashedPassword;
    }

    if (profile_description) {
      userData.profile_description = profile_description;
    }

    const user = await usersModel.findByIdAndUpdate(id, userData, {
      new: true,
    });

    res.json({ success: true, data: user });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

// Delete User (Delete)
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID and delete it
    const deletedUser = await usersModel.findByIdAndDelete(id);

    if (!deletedUser) {
      // If user with the provided ID doesn't exist
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // If user is successfully deleted
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    // If an error occurs during deletion
    res.status(500).json({ success: false, message: err.message });
  }
};

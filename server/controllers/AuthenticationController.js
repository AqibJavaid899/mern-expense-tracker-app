import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExist = await User.findOne({ email });
    if (userExist?._id)
      return res
        .status(409)
        .json({ message: "User already exist in the database." });

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const user = await new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: "User has been created successfully" });
  } catch (error) {
    res.status(406).json({ message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.findOne({ email });

    if (!userExist?._id)
      return res
        .status(404)
        .json({ message: "User do not exist in the database. " });

    const passwordMatched = bcrypt.compareSync(password, userExist.password);

    if (!passwordMatched)
      return res
        .status(406)
        .json({ message: "Email or Password is incorrect." });

    const payload = {
      id: userExist._id,
      email: userExist.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      message: "Successfully logged in the user",
      token,
      user: userExist,
    });
  } catch (error) {
    res.status(406).json({ message: error.message });
  }
};

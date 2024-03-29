import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    categories: [{ label: String, icon: String }],
  },
  { timestamps: true },
);

const User = new mongoose.model("User", userSchema);
export default User;

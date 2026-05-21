import mongoose from "mongoose";

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: "User" | "Admin" | "Worker";
}

const userScehme = new mongoose.Schema<IUser>(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password is required"],
    },
    role: { type: String, enum: ["User", "Admin", "Worker"], default: "User" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userScehme);

export default User;

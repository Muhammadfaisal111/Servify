import mongoose from "mongoose";

interface Iotp {
  email: string;
  otp: string;
}

const otpScehme = new mongoose.Schema<Iotp>(
  {
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    otp: {
      type: String,
      trim: true,
      required: [true, "OTP is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model<Iotp>("Otp", otpScehme);

export default Otp;
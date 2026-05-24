import User from "../models/user.model";
import { AppError } from "../utils/AppError";
import otp from "otp-generator";
import Otp from "../models/otp.model";
interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: "User" | "Admin" | "Worker";
}

export const sendEmailService = async (userData: IUser) => {
  const { fullName, email, password, role } = userData;
  const IsUserExist = await User.findOne({ email });
  if (IsUserExist) {
    throw new AppError("User already exists", 409);
  }
  const newOtp = otp.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
  const optCreated = await Otp.create({ email, otp: newOtp });
  return optCreated;
};

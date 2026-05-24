import { Request, Response } from "express";
import { IUser } from "../models/user.model";
import { AppError } from "../utils/AppError";
import { sendEmailService } from "../services/auth.service";
import { ApiResponse } from "../types/apiResponse.type";
export const sendEmailController = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password, role } = req.body;
    if (!fullName || !email || !password || !role) {
      throw new AppError("All fields are required", 400);
    }
    if (password.length < 8) {
      throw new AppError("Password must be at least 8 characters long", 400);
    }

    // call service
    const newOtp = await sendEmailService({ fullName, email, password, role });
    res.status(201).json({
      success: true,
      message: "OTP sent to email",
      data: newOtp,
    } as ApiResponse<typeof newOtp>);


    
  } catch (error: any) {
    console.error(error);
    res.status(error.statusCode || 500).json({
      status: "error",
      message: error.message || "Internal Server Error",
    });
  }
};

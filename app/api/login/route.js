import connectDB from "@/db/Database";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req) => {
  await connectDB();
  const { email, password } = await req.json();
  try {
    if (!email || !password) {
      return NextResponse.json({
        message: "Please fill all the fields",
        status: 400,
      });
    } else {
      const user = await User.findOne({ email: email });
      console.log("🚀 ~ POST ~ user:", user);
      console.log("🚀 ~ POST ~ email:", email);
      if (!user) {
        return NextResponse.json({
          status: 400,
          message: "Không thấy người dùng",
        });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return NextResponse.json({
            status: 400,
            message: "Sai mật khẩu",
          });
        } else {
          const authToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
          cookies().set("authToken", authToken, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
          });
        }
        return NextResponse.json({
          status: 201,
          message: "Đăng nhập thành công",
        });
      }
    }
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error);
    return NextResponse.json({
      status: 400,
      message: "Something went wrong",
    });
  }
};

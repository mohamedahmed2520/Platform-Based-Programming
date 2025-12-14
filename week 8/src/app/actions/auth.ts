
'use server';
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import User from "@/models/User";
import { connectDB } from "@/lib/db";
import { signToken } from "@/lib/jwt";

export async function login(formData: FormData) {
  await connectDB();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid");

  const token = signToken({ id: user._id, role: user.role });
  cookies().set("token", token, { httpOnly: true });

  return { success: true };
}

export async function logout() {
  cookies().delete("token");
}

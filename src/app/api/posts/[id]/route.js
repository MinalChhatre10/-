import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import mongoose from "mongoose";

// Set the strictQuery option as needed
mongoose.set("strictQuery", false); // or true, based on your preference
console.log(process.env.MONGO);
export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
import mongoose from "mongoose";

// Set the strictQuery option as needed
mongoose.set("strictQuery", false); // or true, based on your preference
//console.log(process.env.MONGO);
export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

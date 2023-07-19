import { NextResponse } from 'next/server';
import Post from 'src/models/Post';
import connect from 'src/utils/db';

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database connection error', { status: 500 });
  }
};

import { NextResponse } from 'next/server';
import Post from 'src/models/Post';
import connect from 'src/utils/db';

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    const post = await Post.find({ slug: slug });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse('Database connection error', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    await connect();
    await Post.deleteOne({ slug: slug });
    return new NextResponse('Post deleted', { status: 201 });
  } catch (error) {
    return new NextResponse('Database connection error', { status: 500 });
  }
};

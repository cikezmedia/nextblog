import { NextResponse } from 'next/server';
import Post from 'src/models/Post';
import connect from 'src/utils/db';

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get('email');
  try {
    await connect();
    const posts = await Post.find(email && { email });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Database connection error', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const addPost = new Post(body);
  try {
    await connect();
    const posts = await addPost.save();
    return new NextResponse('Post has been created', { status: 201 });
  } catch (error) {
    return new NextResponse('Unable to create post', { status: 500 });
  }
};

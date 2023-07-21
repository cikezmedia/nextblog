import { NextResponse } from 'next/server';
import connect from 'src/utils/db';
import bcrypt from 'bcryptjs';
import User from 'src/models/User';

export async function POST(req) {
  const body = await req.json();
  const { name, email, password } = body;

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  try {
    const userExists = await User.find({ email }).count();
    if (userExists) {
      return new NextResponse.send('User already exist', {
        status: 201,
      });
    } else {
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return new NextResponse('User account created successfully', {
        status: 201,
      });
    }
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
}

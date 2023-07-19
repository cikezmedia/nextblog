import { NextResponse } from 'next/server';
import Portfolio from 'src/models/Portfolio';
import connect from 'src/utils/db';

export const GET = async (request, { params }) => {
  const { id } = params;
  console.log(params);
  try {
    await connect();
    const portfolio = await Portfolio.findById(id);
    return new NextResponse(JSON.stringify(portfolio), { status: 200 });
  } catch (error) {
    return new NextResponse('Database connection error', { status: 500 });
  }
};

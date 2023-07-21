import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import connect from 'src/utils/db';
import User from 'src/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        try {
          //check if user exists
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            // check if password is correct
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect && user.email === credentials.email) {
              return user;
            } else {
              throw new Error('Incorrect credentials');
            }
          } else {
            throw new Error('Account not found');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: '/dashboard/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };

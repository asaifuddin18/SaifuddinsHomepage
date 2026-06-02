import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const isProd = process.env.NODE_ENV === 'production';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    maxAge: 365 * 24 * 60 * 60,
  },
  ...(isProd && {
    cookies: {
      sessionToken: {
        name: '__Secure-next-auth.session-token',
        options: {
          httpOnly: true,
          sameSite: 'lax' as const,
          path: '/',
          domain: '.saifuddins.com',
          secure: true,
        },
      },
    },
  }),
};

import NextAuth, { type NextAuthOptions } from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import { env } from "../../../env/server.mjs";



export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      console.log('session', session);
      console.log('user', user);


      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    LinkedInProvider({
      clientId: env.LINKEDIN_CLIENT_ID ?? "",
      clientSecret: env.LINKEDIN_CLIENT_SECRET ?? "",
      client: {
        token_endpoint_auth_method: "client_secret_post",
      },
    })
  ]
};

export default NextAuth(authOptions);

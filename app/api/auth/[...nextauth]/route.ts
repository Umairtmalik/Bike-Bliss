import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Mock user data (replace with database query in production)
        const validUser = {
          id: "1",
          name: "Test User",
          username: "testuser",
          password: "1234",
        };

        if (
          credentials?.username === validUser.username &&
          credentials.password === validUser.password
        ) {
          return { id: validUser.id, name: validUser.name };
        }

        return null; // Invalid credentials
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect unauthenticated users to /login
  },
  session: {
    strategy: "jwt" as const, // Use JWT for session management
  },
  secret: process.env.NEXTAUTH_SECRET, // Add your secret key
};

// Create and export a handler
const handler = NextAuth(authOptions);

// Export GET and POST handlers for Next.js API routing
export { handler as GET, handler as POST };
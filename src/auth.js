import NextAuth from "next-auth";

import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
        Github,Google
    ],
})
import NextAuth from "next-auth/next";
export const BASE_PATH ='/api/auth'

const autOptions: NextAuthConfig ={
    provider: [],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
}
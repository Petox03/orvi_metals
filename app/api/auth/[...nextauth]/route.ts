import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = nextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
                    {
                        method: "POST",
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" },
                    }
                );
                const data = await res.json();
                console.log(data);
                if (data.error) throw data;
                const user = data.user;

                return user;
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user = token as any;
            return session;
        },
        async jwt({ token, user, account }) {
            if(account){
                token.accesToken = account.access_token;
                token.id = user.id
            }
            return token;
        },
    },
    pages:{
        signIn: '/login'
    },
    session:{
        strategy: 'jwt'
    },
    secret: process.env.JWT_SECRET

})

export { handler as GET, handler as POST }
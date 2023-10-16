import nextAuth from "next-auth";

declare module 'nextAuth'{
    interface Session{
        user:{
            id: string
        } & Session['user'];
    }
}
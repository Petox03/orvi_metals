import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
        include:{
            rol: true
        }
    })

    if (!user) {
        return NextResponse.json({ success: false, error: 'Correo inválido' }, { status: 400 });
    }
    else if (user.password !== password) {
        return NextResponse.json({ success: false, error: 'Contraseña inválida' }, { status: 400 });
    }

    const response = NextResponse.json({ user: user}, { status: 200 });

    if(user.rol.rol == "admin"){
        console.log("admin");

    }
    else{
        console.log("customer");
    }
    return response;
}

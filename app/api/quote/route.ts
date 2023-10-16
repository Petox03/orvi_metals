import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, cart } = body;

    const order = await prisma.order.create({
        data: {
            client: name,
            status: { connect: { id: 1 } },
            creationDate: new Date(),
            deadline: new Date(),
            price: 0,
            OrderItem: {
                create: cart.map((item: { id: number, amount: number }) => ({
                    product: { connect: { id: item.id } },
                    quantity: item.amount
                }))
            }
        }
    });

    if (order) {
        return NextResponse.json({ success: "si" });
    }

    return NextResponse.json({ success: "ñaoñao" })
}

export async function GET(){
    const orders = await prisma.order.findMany({
        include:{
            OrderItem: true,
            status: true
        }
    })

    return new NextResponse(JSON.stringify(orders))
}

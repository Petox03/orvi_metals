import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { parse } from 'url';
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const { query } = parse(request.url, true);
    const limit = query.limit;
    const action = query.action;

    if (action == 'show-products') {
        const products = await prisma.product.findMany({
            orderBy: {
                categoryId: 'asc',
            },
        });
        return new NextResponse(JSON.stringify(products));
    }

    const parsedLimit = parseInt(limit as string, 10);

    const products = await prisma.product.findMany({
        orderBy: {
            categoryId: 'asc',
        },
        take: parsedLimit
    });

    return new NextResponse(JSON.stringify(products));
}



export async function POST(request: NextRequest) {
    const body = await request.json();

    const products = await prisma.product.findMany({
        where: {
            categoryId: body.category
        }
    });
    return new NextResponse(JSON.stringify(products));
}
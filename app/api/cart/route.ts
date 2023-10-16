import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { parse } from 'url';
const prisma = new PrismaClient();

export async function GET(req: NextRequest){
    const { query } = parse(req.url, true);
    const array = query.ids;

    if (typeof array === 'string') {
        let json:({Object: any}) = JSON.parse(array);

        if (Array.isArray(json)) {
            let ids = json.map((object: any) => object.id);

            const products = await prisma.product.findMany({
                where: {
                    id: {
                        in: ids
                    }
                },
                select:{
                    id: true,
                    name: true,
                    amount: true,
                    description: true,
                    storageType: true
                },
            });

            return NextResponse.json(products);
        }
    }
    return NextResponse.json([{error: 'No Cart'}]);
}

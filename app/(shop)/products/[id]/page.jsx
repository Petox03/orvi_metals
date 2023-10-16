import Image from "next/image";
import ProductFeatures from "@/components/ProductComponents/ProductFeatures";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

const fetchSingleProduct = async (id) => {
    const product = await prisma.product.findUnique({
        where: {
            id: id
        },
        include: {
            storageType: true
        }
    });
    return product;
};


export default async function SingleProduct({ params }) {

    const { id } = params;

    const product = await fetchSingleProduct(parseInt(id, 10));

    return (

        <>
            <div className="mt-6 container grid grid-cols-1 md:grid-cols-5 gap-x-10">

                <div className="md:col-span-2 grid grid-cols-2 gap-x-3 gap-y-2">
                    <Image
                        width={800}
                        height={800}
                        src={'/img/icons/b0f7cc.png'}
                        alt="Product card"
                    />
                    <Image
                        width={800}
                        height={800}
                        src={'/img/icons/b0f7cc.png'}
                        alt="Product card"
                    />
                    <Image
                        width={800}
                        height={800}
                        src={'/img/icons/b0f7cc.png'}
                        alt="Product card"
                    />
                    <Image
                        width={800}
                        height={800}
                        src={'/img/icons/b0f7cc.png'}
                        alt="Product card"
                    />
                </div>
                <div className="mt-7 md:ml-12 md:col-span-3">

                    <h3 className="text-3xl">{product.name}</h3>
                    <p>¡Cotizar Ahora!</p>

                    <p className="mt-7">
                        {product.description}
                    </p>

                    <ProductFeatures productId={product.id} amount={product.amount} storageType={product.storageType.Type}/>
                    <p>Quedan: {product.amount}{product.storageType.Type}</p>

                </div>

            </div>
            <div className="container flex justify-center items-center mt-10">
                <Card className="w-4/5">
                    <CardBody>
                        <h1 className="text-3xl text-center">{product.name}</h1>
                        <h3 className="text-xl">Aplicaciones:</h3>

                        <Image
                            className="w-full md:p-10"
                            src={'/img/productLabel.png'}
                            alt="Product Label"
                            width={1080}
                            height={1080}
                        />

                        <h3 className="text-xl">Información extra:</h3>
                    </CardBody>
                </Card>
            </div>
        </>



    );

}
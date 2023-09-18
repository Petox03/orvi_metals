'use client';
import Image from "next/image";
import ProductFeatures from "@/components/ProductComponents/ProductFeatures";
import { Card, CardBody } from "@nextui-org/card";
import React from "react";

const fetchSingleProduct = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json());
};

const fetchComments = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json());
};


export default async function SingleProduct({ params }) {

    const { id } = params;

    const product = await fetchSingleProduct(id);
    const comments = await fetchComments(id);

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

                    <h3 className="text-3xl">{product.title}</h3>
                    <p>¡Cotizar Ahora!</p>

                    <p className="mt-7">
                        {product.body}
                    </p>

                    <ProductFeatures />

                </div>

            </div>
            <div className="container flex justify-center items-center mt-10">
                <Card className="w-4/5">
                    <CardBody>
                        <h1 className="text-3xl text-center">{product.title}</h1>
                        <h3 className="text-xl">Aplicaciones:</h3>

                        <ul className="text-xl list-decimal px-7 py-4">
                            {comments.slice(0, 2).map(comment => (
                                <li key={comment.id}>{comment.body}</li>
                            ))}
                        </ul>

                        <Image
                            className="w-full md:p-10"
                            src={'/img/productLabel.png'}
                            alt="Product Label"
                            width={1080}
                            height={1080}
                        />

                        <h3 className="text-xl">Información extra:</h3>

                        <ul className="text-xl list-decimal px-7 py-4">
                            {comments.slice(2, 5).map(comment => (
                                <li key={comment.id}>{comment.body}</li>
                            ))}
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </>



    );

}
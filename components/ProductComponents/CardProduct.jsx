'use client';
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';

const fetchProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};

export default function CardProduct({ maxView }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        }

        loadProducts();
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {products.slice(0, maxView).map(item => (
                    <div key={item.id}>
                        <Card className='mt-7 md:mt-0'>
                            <CardBody className='overflow-visible min-h-[20em] max-h-[29em]' >
                                <Image
                                    src={'/img/icons/b0f7cc.png'}
                                    alt={'product image'}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            <p className='mt-3 text-center text-xl'>product title</p>
                            <p className="mt-6 text-small">{item.body}</p>

                            </CardBody>
                            <CardFooter className='flex justify-center'>
                                <Link className='mt-4' href={`products/${item.id}`}>
                                    <Button size='lg' color='primary'>Ver Detalles</Button>
                                </Link>
                            </CardFooter>
                        </Card>

                    </div>
                ))}
            </div>

            <div className='mt-10 container flex items-center place-content-center text-xl md:text-3xl'>
                <Link href={'/products'}>Conoce Todos Los Productos ➤</Link>
            </div>
        </>
    );
}

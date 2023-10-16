'use client';
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { useState, useEffect } from "react";


export default function CardProduct(props) {

    const { maxView, category, action } = props;

    const serchProducts = async (category) => {
        let response
        if(category != null){
            const myCategory = parseInt(category, 10);
            response = await fetch('/api/products', {
                method: 'POST',
                body: JSON.stringify({category: myCategory})
            })
        }
        else{
            response = await fetch(`/api/products?limit=${maxView}&action=${action}`, {
                method: 'GET',
            });
        }
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : [data]);

    }

    useEffect(() => {
        serchProducts(category);
    }, [category]);

    const [products, setProducts] = useState([]);

    return (
        <>
                {products.map(item => (
                    <div key={item.id}>
                        <Card className='mt-7 md:mt-0'>
                            <CardBody className='overflow-visible min-h-[20em] max-h-[29em]' >
                                <Image
                                    src={'/img/icons/b0f7cc.png'}
                                    alt={'product image'}
                                    width={600}
                                    height={600}
                                    className="w-full max-h-[18rem] md:h-full object-cover rounded-lg"
                                    priority
                                />
                                <p className='mt-3 text-center text-lg'>{item.name}</p>
                                <p className="mt-6 text-sm">{item.description}</p>

                            </CardBody>
                            <CardFooter className='flex justify-center'>
                                <Link className='mt-12 md:mt-4 mb-3' href={`products/${item.id}`}>
                                    <Button size='lg' color='primary'>Ver Detalles</Button>
                                </Link>
                            </CardFooter>
                        </Card>

                    </div>
                ))}
        </>
    );
}

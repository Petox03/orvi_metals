'use client';
import Image from "next/image";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/table";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";

export default function Quote() {

    const fertchOrders = async () => {
        const response = await fetch('/api/quote', {
            method: 'GET',
        })
        const data = await response.json();

        setOrders(Array.isArray(data) ? data : [data]);

    }

    useEffect(() => {
        fertchOrders();
    }, []);

    const [orders, setOrders] = useState([]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 bg-[#f7f9ff]">
                <h1 className="text-3xl font-semibold">Tus Órdenes</h1>

                {orders.map(item => {
                    return (
                        <section key={item.id} className="w-full mt-6">
                            <div className="grid grid-cols-4">
                                <div>
                                    <Image
                                        src={'/img/icons/b0f7cc.png'}
                                        alt={'product image'}
                                        width={150}
                                        height={150}
                                    />
                                </div>
                                <div className="col-span-3 ml-5">
                                    <h1 className="text-xl font-semibold">Órden #{item.id}</h1>
                                    <p>Cantidad: {item.OrderItem.length} productos</p>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <div className="mt-5 md:mt-0 p-5">
                <div className="md:sticky md:top-[4.5rem]">
                    <h1 className="text-4xl text-center">Cotización #421</h1>

                    <Table className="mt-6" aria-label="Example static collection table">
                        <TableHeader>
                            <TableColumn>Descripción</TableColumn>
                            <TableColumn>Cantidad</TableColumn>
                            <TableColumn>Precio por unidad</TableColumn>
                            <TableColumn>Importe</TableColumn>
                        </TableHeader>
                        <TableBody>

                            <TableRow key="1">
                                <TableCell>Producto #1</TableCell>
                                <TableCell>3</TableCell>
                                <TableCell>100</TableCell>
                                <TableCell>$300</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Producto #2</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>200</TableCell>
                                <TableCell>$100</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>Producto #3</TableCell>
                                <TableCell>6</TableCell>
                                <TableCell>300</TableCell>
                                <TableCell>$1800</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <h1 className="text-2xl mt-5">Total de envío: <span className="font-light">$515</span> </h1>
                        </div>
                        <div className="grid justify-items-end">
                            <h1 className="text-2xl mt-5">Subtotal: <span className="font-light">$3100</span> </h1>
                            <h1 className="text-2xl mt-5">IVA(16%): <span className="font-light">$496</span> </h1>
                            <h1 className="text-2xl mt-5">Total: <span className="font-light">$3596</span> </h1>
                        </div>
                    </div>

                    <Button size="lg" color="primary" className="w-full mt-5">
                        Continuar para comprar
                    </Button>

                </div>
            </div>
        </div>
    );

}
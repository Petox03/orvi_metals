'use client';
import { Divider } from "@nextui-org/divider";
import CartProduct from "@/components/ProductComponents/CartProduct";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { redirect } from 'next/navigation'


export default function cart() {

    const handleRedirect = () =>{
        redirect('/quote');
    }

    return (

        <>
            <Divider className="absolute hidden md:block left-[50%] bg-[#323232]" orientation="vertical"></Divider>

            <div className="grid grid-cols-1 md:grid-cols-2 container p-10 h-screen">

                <div>
                    <h1 className="text-3xl font-semibold">Tu Carrito</h1>
                    <p>¿Listo para cotizar?</p>

                    <CartProduct maxView={3}></CartProduct>

                </div>
                <div className="container flex justify-center items-center">
                    <section className="flex flex-col">
                        <h3 className="text-xl font-semibold">Información para la cotización</h3>

                        <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mt-6">
                            <Input type="text" label="Nombre" />
                            <Input type="text" label="Apellido" />
                        </div>
                        <div className="flex w-full mt-2">
                            <Input type="text" label="Dirección" />
                        </div>
                        <div className="flex w-full mt-2">
                            <Input type="text" label="Teléfono" />
                        </div>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mt-2">
                            <Select
                                label="País"
                                placeholder="Selecciona un país"
                                className="max-w-xs w-full"
                            >
                                <SelectItem>
                                    a
                                </SelectItem>
                                <SelectItem>
                                    b
                                </SelectItem>
                                <SelectItem>
                                    c
                                </SelectItem>
                            </Select>
                            <Select
                                label="Ciudad"
                                placeholder="Selecciona tu ciudad"
                                className="max-w-xs w-full"
                            >
                                <SelectItem>
                                    a
                                </SelectItem>
                                <SelectItem>
                                    b
                                </SelectItem>
                                <SelectItem>
                                    c
                                </SelectItem>
                            </Select>
                            <Input type="number" label="C.P." />
                        </div>
                        <Button size="lg" color="primary" className="mt-5" onClick={handleRedirect}>
                                Continuar para cotizar
                        </Button>
                    </section>
                </div>


            </div>
        </>



    );

}
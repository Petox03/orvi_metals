'use client';
import CartProduct from "@/components/ProductComponents/CartProduct";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { ScrollShadow, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Cart() {

    const [formState, setFormState] = useState({
        name: "",
        address: "",
        phone: "",
        country: "",
        city: "",
        CP: "",
    });

    const createOrder = async () => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const response = await fetch('/api/quote', {
            method: 'POST',
            body: JSON.stringify({ name: formState.name, cart: cart })
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const userStatus = status;

    return (
        <>
            <Divider className="absolute hidden md:block left-[50%] top-[4em] bg-[#323232]" orientation="vertical"></Divider>

            <div className="grid grid-cols-1 md:grid-cols-2 container p-0 md:p-8 h-screen">
                <div>
                    <h1 className="text-3xl font-semibold">Tu Carrito</h1>
                    <p>¿Listo para cotizar?</p>

                    <ScrollShadow className="w-full md:h-[44em] p-3 mb-5 md:mb-0">
                        <CartProduct></CartProduct>
                    </ScrollShadow>

                </div>
                <div className="flex justify-center items-center md:ml-12 w-full">
                    <div className="md:ml-12">
                        <section className="flex flex-col">
                            <h3 className="text-xl font-semibold">Información para la cotización</h3>

                            <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mt-6">
                                <Input type="text" label="Nombre completo" name="name" value={formState.name} onChange={handleInputChange} />
                            </div>
                            <div className="flex w-full mt-2">
                                <Input type="text" label="Dirección" name="address" value={formState.address} onChange={handleInputChange} />
                            </div>
                            <div className="flex w-full mt-2">
                                <Input type="text" label="Teléfono" name="phone" value={formState.phone} onChange={handleInputChange} />
                            </div>
                            <div className="flex w-full flex-wrap md:flex-nowrap gap-2 mt-2">
                                <Input type="text" label="País" name="country" value={formState.country} onChange={handleInputChange} />
                                <Input type="text" label="Ciudad" name="city" value={formState.city} onChange={handleInputChange} />
                                <Input type="text" label="C.P." name="CP" value={formState.CP} onChange={handleInputChange} />
                            </div>
                            <Button size="lg" color="primary" className="mt-5" onClick={createOrder}>
                                Continuar para cotizar
                            </Button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

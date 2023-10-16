'use client';
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function ProductFeatures({ productId, amount, storageType }) {

    const [count, setCount] = useState(1);
    const [isAdding, setIsAdding] = useState(false);

    const addToCart = (id, amount) => {
        setIsAdding(true);

        let cart = localStorage.getItem('cart');

        if (!cart) {
            cart = [];
        } else {
            cart = JSON.parse(cart);
        }
        cart.push({ id: id, amount: amount });

        localStorage.setItem('cart', JSON.stringify(cart));

        setIsAdding(false);
    };

    const increment = () => {
        if (count < amount) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleCountChange = (event) => {
        const value = parseInt(event.target.value);
        if (value >= 1 && value <= amount) {
            setCount(value);
        }
    };

    return (
        <section className="mt-12 md:text-start">

            <div className="mt-7 items-end flex flex-row">
                <Button className="mr-5 md:w-60" color="primary" size="lg" radius="none" disabled={isAdding} onClick={() => {
                    addToCart(productId, count)
                }
                }>Al Carrito</Button>

                {/* counter */}
                <div className="items-center">
                    <h1 className="text-sm">Cantidad en {storageType}</h1>
                    <div className="flex gap-4 border-2 items-center">
                        <button className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-4 py-2" onClick={decrement}>-</button>
                        <input type="number" value={count} onChange={handleCountChange} className="text-xl w-16"/>
                        <button className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-3 py-2" onClick={increment}>+</button>
                    </div>
                </div>
            </div>

        </section>
    );
}

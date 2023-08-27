'use client';
import { RadioGroup, Radio } from "@nextui-org/radio";
import { useState } from "react";
import { Button } from "@nextui-org/button";

export default function ProductFeatures() {

    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <section className="mt-12 text-center md:text-start">
            <p>Tipo</p>
            <RadioGroup
                orientation="horizontal"
            >
                <Radio value="A">A</Radio>
                <Radio value="B">B</Radio>
                <Radio value="C">C</Radio>
            </RadioGroup>

            <div className="mt-7 items-end flex flex-row">
                <Button className="mr-5 md:w-60" color="primary" size="lg" radius="none">Agregar Al Carrito</Button>

                {/* counter */}
                <div className="items-center">
                    <h1 className="text-sm">Cantidad</h1>
                    <div className="flex gap-4 border-2 items-center">
                        <Button size="sm" className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-4 py-2 rounded" onClick={decrement}>-</Button>
                        <span className="text-xl">{count}</span>
                        <Button size="sm" className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-4 py-2 rounded" onClick={increment}>+</Button>
                    </div>
                </div>
            </div>

        </section>
    );
}
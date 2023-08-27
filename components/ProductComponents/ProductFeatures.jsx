'use client';
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Counter } from "@/components/ProductComponents/counter";
import { Button } from "@nextui-org/button";

export default function ProductFeatures() {
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
                <Counter></Counter>
            </div>

        </section>
    );
}
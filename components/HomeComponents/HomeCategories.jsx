'use client';
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/divider";

export default function HomeCategories() {
    return (
        <>

            <div className="flex mt-12 min-w-screen justify-center items-center">
                <p className="text-3xl md:text-5xl font-light">Categorías principales</p>
            </div>

            <div className="container relative | grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-10 | mt-10 | h-[120rem] md:h-[35rem] items-center">

                <Link href={{ pathname: "/products", query: { category: "2" } }} className="rounded-xl drop-shadow-xl h-[25rem] md:h-full bg-repeat bg-center transform transition-all duration-500 hover:scale-105" style={{ backgroundImage: "url('img/orvimetals.jpg')" }}>

                    <div className="items-center rounded-xl justify-center h-full bg-black bg-opacity-30 flex text-white opacity-100 transition-all duration-500">
                        <p className="text-4xl font-semibold">Refractarios</p>
                    </div>

                </Link>

                <Card className="drop-shadow-xl h-[25rem] md:h-full bg-repeat bg-center transform transition-all duration-500 hover:scale-105" style={{ backgroundImage: "url('img/799b30d2-e248-4041-b714-7cacdba6f3ca.jpg')" }}>
                    <CardBody className="items-center justify-center bg-black bg-opacity-40 flex text-white opacity-100 transition-all duration-500">
                        <p className="text-4xl font-semibold">Siderúrgica</p>
                    </CardBody>
                </Card>

                <Link href={{ pathname: "/products", query: { category: "3" } }} className="rounded-xl drop-shadow-xl h-[25rem] md:h-full bg-cover bg-center transform transition-all duration-500 hover:scale-105" style={{ backgroundImage: "url('img/estaño.jpg')" }}>

                    <div className="items-center rounded-xl justify-center h-full bg-black bg-opacity-30 flex text-white opacity-100 transition-all duration-500">
                        <p className="text-4xl font-semibold">Metales</p>
                    </div>

                </Link>
                <Card className="drop-shadow-xl h-[25rem] md:h-full relative transform transition-all duration-500 hover:scale-105">
                    <Image src={"/img/syncron.jpg"} alt="syncron image" width={2000} height={2000} className="w-full h-full"></Image>
                    <CardBody className="items-center justify-center absolute inset-0 bg-black bg-opacity-40 flex text-white opacity-100 transition-all duration-500">
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">Lubricantes</p>
                    </CardBody>
                </Card>

                <Divider className="absolute w-0.5 hidden md:block left-[50%] bg-[#323232]" orientation="vertical"></Divider>
            </div>
        </>
    );
}
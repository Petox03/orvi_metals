'use client';
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";
import { Divider } from "@nextui-org/divider";

export default function HomeCategories() {
    return (
        <>

            <div className="flex mt-12 min-w-screen justify-center items-center">
                <p className="text-3xl md:text-5xl font-light">Categorías principales</p>
            </div>

            <div className="container relative | grid grid-cols-1 md:grid-cols-2 gap-20 gap-y-10 | mt-10 | h-[35rem] items-center">

                <Card className="h-full">
                    <CardBody className="items-center justify-center">
                        <p className="text-4xl font-light">Refractarios</p>
                    </CardBody>
                </Card>
                <Card className="h-full">
                    <CardBody className="items-center justify-center">
                        <p className="text-4xl font-light">Refractarios</p>
                    </CardBody>
                </Card>
                <Card className="h-full">
                    <CardBody className="items-center justify-center">
                        <p className="text-4xl font-light">Refractarios</p>
                    </CardBody>
                </Card>
                <Card className="h-full">
                    <CardBody className="items-center justify-center">
                        <p className="text-4xl font-light">Refractarios</p>
                    </CardBody>
                </Card>

                <Divider className="absolute w-0.5 hidden md:block left-[50%] bg-[#323232] dark:bg-[#262626]" orientation="vertical"></Divider>
            </div>
        </>
    );
}
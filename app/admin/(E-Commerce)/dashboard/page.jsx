import { Card } from "@nextui-org/card";
import Image from "next/image";

export default function Dashboard() {
    return (
        <>
            <h1 className="text-4xl mb-7 font-semibold">Home Dashboard</h1>
            <div className="md:px-[11rem] grid grid-cols-1 md:grid-cols-3">

                <Card className="py-8 px-12 w-[20rem] grid grid-cols-3">
                    <div className="w-[5rem] h-[5rem]">
                        <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className=" rounded-full" />
                    </div>
                    <div className="ml-5 col-span-2">
                        <h1 className="text-4xl font-semibold">360</h1>
                        <p className="mt-2">Ordenes totales</p>
                        <div className="mt-2 inline-flex">
                            <Image src="/img/icons/up.png" alt="up" width={1000} height={1000} className="w-[20px] h-[20px]"></Image>
                            <p className="inline-flex ml-2">4% (30 days)</p>
                        </div>
                    </div>
                </Card>
                <Card className="py-8 px-12 w-[20rem] grid grid-cols-3">
                    <div className="w-[5rem] h-[5rem]">
                        <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className=" rounded-full" />
                    </div>
                    <div className="ml-5 col-span-2">
                        <h1 className="text-4xl font-semibold">357</h1>
                        <p className="mt-2">Total repartidas</p>
                        <div className="mt-2 inline-flex">
                            <Image src="/img/icons/up.png" alt="up" width={1000} height={1000} className="w-[20px] h-[20px]"></Image>
                            <p className="inline-flex ml-2">4% (30 days)</p>
                        </div>
                    </div>
                </Card>
                <Card className="py-8 px-12 w-[20rem] grid grid-cols-3">
                    <div className="w-[5rem] h-[5rem]">
                        <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className=" rounded-full" />
                    </div>
                    <div className="ml-5 col-span-2">
                        <h1 className="text-4xl font-semibold">3</h1>
                        <p className="mt-2">Total canceladas</p>
                        <div className="mt-2 inline-flex">
                            <Image src="/img/icons/down.png" alt="up" width={1000} height={1000} className="w-[20px] h-[20px]"></Image>
                            <p className="inline-flex ml-2">25% (30 days)</p>
                        </div>
                    </div>
                </Card>

            </div>
        </>
    );
}
import { Card } from "@nextui-org/card";
import Image from "next/image";

export default function Dashboard() {
    return(
        <>
        <h1 className="text-4xl mb-7 font-semibold">Home Dashboard</h1>
        <div className="md:px-[11rem] grid grid-cols-1 md:grid-cols-3">

            <Card className="p-5 grid grid-cols-2">
                <div className="">
                    <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className="w-full h-full" />
                </div>
            </Card>

        </div>
        </>
    );
}
import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
    return (

        <div className="relative md:static grid grid-cols-1 md:grid-cols-3 justify-items-center">
            <div className="z-10 p-5 | absolute md:static | container min-h-screen | grid justify-items-center items-center bg-white dark:bg-slate-800">
                <div>
                    <div className="bg-white">
                        <Image
                            src="/img/logo.jpg"
                            width={300}
                            height={300}
                            alt="company's logo"
                        ></Image>
                    </div>

                    <Input
                        className="mt-4"
                        type="email"
                        label="Correo Electrónico"
                        placeholder="correo@example.com"
                        labelPlacement="outside"
                    />
                    <Input
                        className="mt-4"
                        type="password"
                        label="Contraseña"
                        placeholder="Password"
                        labelPlacement="outside"
                    />
                    <Link href={'/'}>
                        <Button
                            className="mt-6"
                            color="danger"
                            size="lg"
                            fullWidth
                        >
                            Iniciar Sesión
                        </Button>
                    </Link>
                </div>

            </div>
            <div className="z-0 absolute md:static container col-span-2 bg-repeat bg-center min-h-screen" style={{ backgroundImage: "url('img/orvimetals.jpg')" }}>

            </div>
        </div>
    );
}
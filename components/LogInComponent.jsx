'use client';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { LogoLogIn } from "@/components/icons";
export function LogInComponent({ }) {
    return (<div>
        <LogoLogIn></LogoLogIn>

        <Input className="mt-4" type="email" label="Correo Electrónico" placeholder="correo@example.com" labelPlacement="outside" />
        <Input className="mt-4" type="password" label="Contraseña" placeholder="Contraseña" labelPlacement="outside" />
        <Link href={'/'}>
            <Button className="mt-6" color="danger" size="lg" fullWidth>
                Iniciar Sesión
            </Button>
        </Link>
    </div>);
}

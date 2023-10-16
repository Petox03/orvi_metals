'use client';
import { useState } from 'react';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { LogoLogIn } from "@/components/icons";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

export function LogInComponent({ }) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault()

        signIn("credentials", {
            email: email,
            password: password
        }).then((res)=>{
            if(res.error){
                alert(res.error)
            }
        })
    }

    return (
        <div>
            <LogoLogIn></LogoLogIn>

            <form onSubmit={handleSubmit}>
                <Input className="mt-4" type="email" label="Correo Electrónico" placeholder="correo@example.com" labelPlacement="outside"
                value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input className="mt-4" type="password" label="Contraseña" placeholder="Contraseña" labelPlacement="outside"
                value={password} onChange={(event) => setPassword(event.target.value)} />
                <Button type='submit' className="mt-6" color="danger" size="lg" fullWidth>
                    Iniciar Sesión
                </Button>
            </form>
        </div>

    )
}

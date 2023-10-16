'use client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";

export default function ErpNav() {
    const {data: session, status} = useSession();
    let user;

    if(status != "loading"){
        user = session.user;
        console.table(session);
    }

    return (
        <div className="relative p-8 w-full bg-[#ffffff]">
            <section className="absolute top-2 right-1">
                <Dropdown >
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            {status === "authenticated" && (<p>{user.name}</p>)}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit"]}>
                        <DropdownItem key="new">Configuraciones</DropdownItem>
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="logout" color="danger" className="text-danger hover:text-white">
                            <p onClick={() => signOut()}>Cerrar Sesión</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </section>
        </div>
    );
}

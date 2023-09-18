'use client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Link from "next/link";

const ErpNav = () => {
    return (
        <div className="relative p-8 w-full bg-[#ededed]">
            <section className="absolute top-2 right-1">
                <Dropdown >
                    <DropdownTrigger>
                        <Button
                            variant="bordered"
                        >
                            user.name
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit"]}>
                        <DropdownItem key="new">Configuraciones</DropdownItem>
                        <DropdownItem key="edit">Editar</DropdownItem>
                        <DropdownItem key="logout" color="danger" className="text-danger hover:text-white">
                            <Link href="/login">Cerrar Sesión</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </section>
        </div>
    );
}

export default ErpNav;

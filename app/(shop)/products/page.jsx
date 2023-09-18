'use client';
import { Card, CardBody } from "@nextui-org/card";
import { Accordion, AccordionItem, Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Badge } from "@nextui-org/badge";
import CardProduct from "@/components/ProductComponents/CardProduct";

const fetchUser = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .then(res => res.json());
};

export default async function products() {

    const user = await fetchUser();

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <div className="px-6 pb-5">
                    <h1 className="text-xl text-gray-700 mb-5 md:mb-10">Inicio &#62; Catálogo</h1>
                    <Card className="sticky md:top-[4.5rem] items-center">
                        <CardBody className="flex items-center">

                            <Button className="w-2/3" size="lg">Explorar Todo</Button>

                            <div className="container mt-6 text-md flex justify-around">
                                <Badge content="2" color="secondary" shape="rectangle" disableOutline>
                                    <p>Filtros</p>
                                </Badge>

                                <p className="hover:cursor-pointer hover:text-blue-600 select-none">Limpiar filtros</p>
                            </div>

                            <Accordion variant="splitted" selectionMode="multiple" className="mt-6">
                                <AccordionItem key="1" aria-label="Categoría" title="Categoría">
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none">Refractarios</p>
                                    <Divider></Divider>
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none mt-6">Metal Working</p>
                                    <Divider></Divider>
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none mt-6">Ferroaleaciones</p>
                                    <Divider></Divider>
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none mt-6">Metales</p>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Sección" title="Sección">
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none">Metal</p>
                                    <Divider></Divider>
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none mt-6">Iron</p>
                                    <Divider></Divider>
                                    <p className="hover:cursor-pointer hover:text-blue-600 select-none mt-6">No ferrosos</p>
                                </AccordionItem>
                            </Accordion>

                        </CardBody>
                    </Card>
                </div>

                <div className="col-span-2">
                    <div className="flex justify-between">
                        <p>Enviar a <span className="text-blue-600">{user.address.street}, {user.address.city}, {user.address.zipcode}</span></p>
                        
                    </div>

                    <div className="mt-6">
                        <CardProduct maxView={8}/>
                    </div>
                </div>

            </div>
        </>
    );
}
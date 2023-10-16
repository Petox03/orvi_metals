'use client';
import CardProduct from "@/components/ProductComponents/CardProduct";
import { Card, CardBody } from "@nextui-org/card";
import { Accordion, AccordionItem, Divider, Button, Badge } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';


export default function Products() {
    const [filtersNumber, setFilterNumber] = useState(0);
    const [category, setCategory] = useState(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const cat = searchParams.get('category');
        setCategory(cat);
        if(cat != null){
            setFilterNumber(1);
        }
    }, [searchParams]);

    const handleCategoryChange = async (cat) => {
        setCategory(cat);
        if (cat == null) {
            setFilterNumber(0);
        }
        else {
            setFilterNumber(1);
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">

                <div className="px-6 pb-5">
                    <h1 className="text-xl text-gray-700 mb-5 md:mb-10">Inicio &#62; Catálogo</h1>
                    <Card className="sticky md:top-[4.5rem] items-center">
                        <CardBody className="flex items-center">

                            <Button className="w-2/3" color="default" size="lg" onClick={() => { handleCategoryChange(null) }}>Explorar Todo</Button>

                            <div className="container mt-6 text-md flex justify-around">
                                <Badge content={`${filtersNumber}`} color="secondary" shape="rectangle" disableOutline className={filtersNumber != 0 ? '' : 'hidden'}>
                                    <p>Filtros</p>
                                </Badge>

                                <p className="hover:cursor-pointer hover:text-blue-600 select-none" onClick={() => { handleCategoryChange(null) }}>Limpiar filtros</p>
                            </div>

                            <Accordion variant="splitted" selectionMode="multiple" className="mt-6">
                                <AccordionItem key="1" aria-label="Categoría" title="Categoría">
                                    <button onClick={() => handleCategoryChange(2)} className="hover:cursor-pointer hover:text-blue-600 select-none">Refractarios</button>
                                    <Divider className="mb-4"></Divider>
                                    <button /* onClick={() => handleCategoryChange(2)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Siderúrgica</button>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Aluminio</p>
                                    <Divider className="mb-4"></Divider>
                                    <button /* onClick={() => handleCategoryChange(2)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Metal Working</button>
                                    <Divider className="mb-4"></Divider>
                                    <button /* onClick={() => handleCategoryChange(2)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Ferroaleaciones</button>
                                    <Divider className="mb-4"></Divider>
                                    <button /* onClick={() => handleCategoryChange(2)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Inoculantes</button>
                                    <Divider className="mb-4"></Divider>
                                    <p onClick={() => handleCategoryChange(3)} className="hover:cursor-pointer hover:text-blue-600 select-none">Metales</p>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Arenas y harinas de zirconio</p>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Granallas</p>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Grafito</p>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Filtros</p>
                                    <Divider className="mb-4"></Divider>
                                    <p /* onClick={() => handleCategoryChange(3)} */ className="hover:cursor-pointer hover:text-blue-600 select-none">Cerámicos</p>
                                    <Divider className="mb-4"></Divider>
                                </AccordionItem>
                            </Accordion>

                        </CardBody>
                    </Card>
                </div>

                <div className="col-span-2">
                    <div className="flex justify-between">
                        <p>Enviar a <span className="text-blue-600">Kulas Light, Gwenborough, 92998-3874</span></p>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-0">
                        <CardProduct category={category} maxView={1} action={'show-products'} />
                    </div>
                </div>

            </div>
        </>
    );
}
'use client';
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { ScrollShadow } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const ErpNavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handdleClick = () => {
        setIsOpen(false);
    }

    return (
        <>
            <div className="relative ">
                <ScrollShadow hideScrollBar className={`${isOpen ? 'h-screen w-screen md:w-[auto] bg-[#2a3f54]' : 'h-[5rem]'} md:h-screen md:bg-[#2a3f54] sticky top-0 z-50`}>
                    <div className={`${isOpen ? 'sm:w-screen sm:h-screen md:w-full' : 'w-20 sm:h-[5rem]'} md:h-screen flex flex-col transition-all duration-500 ease-in-out px-4 py-8 text-white`}>
                        <div className="flex items-center justify-between">
                            <h1 className={`${isOpen ? 'block' : 'hidden'} text-2xl font-semibold`}>ORVI Metals</h1>
                            <button onClick={() => setIsOpen(!isOpen)} className='text-2xl text-slate-900 md:text-white/60 md:hover:text-white transition-all duration-500 ease-in-out'>
                                {isOpen ? 'X' : '☰'}
                            </button>
                        </div>
                        <nav className={`mt-5 ${isOpen ? 'block' : 'hidden'}`}>
                            <div className="grid grid-cols-1 md:grid-cols-3 | justify-items-center mb-7">
                                <div>
                                    <Image className='rounded-full' src={'/img/logo/logoErpNav.png'} alt='Logo Image' width={100} height={100}></Image>
                                </div>
                                <div className='md:col-span-2 | mt-5 md:mt-0 md:ml-4'>
                                    <h3 className='text-[#bab8b8]'>Welcome</h3>
                                    <h2 className='text-lg'>Orlando</h2>
                                </div>
                            </div>

                            <Accordion selectionMode="multiple" isCompact>
                                <AccordionItem key="1" aria-label="Accordion 1" title={<span className="text-white">Home</span>}>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin">Inicio</Link></button>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 1" title={<span className="text-white">E-Commerce</span>}>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin/dashboard">Dashboard</Link></button>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin/#">Productos</Link></button>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin/orders">Órdenes</Link></button>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin/#">Metas</Link></button>
                                    <button onClick={handdleClick} className="block rounded-full mb-5 ml-5"><Link href="/admin/#">Soporte</Link></button>
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="Accordion 2" title={<span className="text-white">Inventario</span>}>
                                    
                                </AccordionItem>
                            </Accordion>

                        </nav>
                    </div>
                </ScrollShadow>
            </div>
        </>
    )
}

export default ErpNavbarComponent

'use client';
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { Progress, Skeleton, Image } from "@nextui-org/react";

export default function Admin() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="md:col-span md:col-span-3">
                    <Card className='bg-[#212329] text-white min-h-[30rem]'>
                        <CardHeader className='text-3xl font-semibold'>Productos top</CardHeader>
                        <Divider className='bg-[#3a3a3d]' />
                        <CardBody>
                            <Table aria-label="Example static collection table" className='text-black'>
                                <TableHeader>
                                    <TableColumn>Nombre del producto</TableColumn>
                                    <TableColumn>Cantidad</TableColumn>
                                    <TableColumn>Ventas De Órdenes</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>618</TableCell>
                                        <TableCell>
                                            $214k
                                            <Progress color="primary" aria-label="Loading..." value={90} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>1721</TableCell>
                                        <TableCell>
                                            $172k
                                            <Progress color="primary" aria-label="Loading..." value={80} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>1206</TableCell>
                                        <TableCell>
                                            $121k
                                            <Progress color="primary" aria-label="Loading..." value={70} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>776</TableCell>
                                        <TableCell>
                                            $85k
                                            <Progress color="primary" aria-label="Loading..." value={60} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>530</TableCell>
                                        <TableCell>
                                            $81k
                                            <Progress color="primary" aria-label="Loading..." value={50} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="6">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>593</TableCell>
                                        <TableCell>
                                            $77k
                                            <Progress color="primary" aria-label="Loading..." value={40} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="7">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>321</TableCell>
                                        <TableCell>
                                            $68k
                                            <Progress color="primary" aria-label="Loading..." value={30} />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow key="8">
                                        <TableCell>Refractario</TableCell>
                                        <TableCell>680</TableCell>
                                        <TableCell>
                                            $67k
                                            <Progress color="primary" aria-label="Loading..." value={29} />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </div>
                <div className="md:col-span md:col-span-1">
                    <Card className='bg-[#212329] text-white min-h-[30rem]'>
                        <CardHeader className='text-2xl p-7'>
                            <p className='absolute left-[50%] ml-[-50px]'>Inventario</p>
                        </CardHeader>
                        <Divider className='bg-[#3a3a3d]' />
                        <CardBody>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </CardBody>
                    </Card>
                </div>
            </div>

            {/* cols 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

                <div>
                    <Card className='bg-[#212329] text-white min-h-[30rem]'>
                        <CardHeader className="text-2xl">
                            <p>Meta de ventas</p>
                        </CardHeader>
                        <Divider className='bg-[#3a3a3d]' />
                        <CardBody>
                            <div className="grid grids-cols-12 md:grid-cols-11 gap-4 mb-12 md:mb-7">
                                <div className="col-span-3 md:col-span-2 flex justify-center">
                                    <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]" />
                                </div>
                                <div className="col-span-9">
                                    <div className="flex justify-between text-sm md:text-xl">
                                        <p className="md:ml-5 mb-5 mr-2">Refractario</p>
                                        <p>$994k / <span className="text-gray-400">$1754k</span></p>
                                    </div>
                                    <Progress color="primary" size="lg" aria-label="Loading..." value={60} />
                                </div>
                            </div>
                            <div className="grid grids-cols-12 md:grid-cols-11 gap-4 mb-12 md:mb-7">
                                <div className="col-span-3 md:col-span-2 flex justify-center">
                                    <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]" />
                                </div>
                                <div className="col-span-9">
                                    <div className="flex justify-between text-sm md:text-xl">
                                        <p className="md:ml-5 mb-5 mr-2">Metal</p>
                                        <p>$164K / <span className="text-gray-400">$570k</span></p>
                                    </div>
                                    <Progress color="primary" size="lg" aria-label="Loading..." value={30} />
                                </div>
                            </div>
                            <div className="grid grids-cols-12 md:grid-cols-11 gap-4 mb-12 md:mb-7">
                                <div className="col-span-3 md:col-span-2 flex justify-center">
                                    <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]" />
                                </div>
                                <div className="col-span-9">
                                    <div className="flex justify-between text-sm md:text-xl">
                                        <p className="md:ml-5 mb-5 mr-2">Ferroaleaciones</p>
                                        <p>$373K / <span className="text-gray-400">$223K</span></p>
                                    </div>
                                    <Progress color="primary" size="lg" aria-label="Loading..." value={100} />
                                </div>
                            </div>
                            <div className="grid grids-cols-12 md:grid-cols-11 gap-4 mb-12 md:mb-7">
                                <div className="col-span-3 md:col-span-2 flex justify-center">
                                    <Image src="/img/icons/b0f7cc.png" alt="image" width={1000} height={1000} className="w-[50px] md:w-[80px] h-[50px] md:h-[80px]" />
                                </div>
                                <div className="col-span-9">
                                    <div className="flex justify-between text-sm md:text-xl">
                                        <p className="md:ml-5 mb-5 mr-2">Refractario #2</p>
                                        <p>$118K / <span className="text-gray-400">$167K</span></p>
                                    </div>
                                    <Progress color="primary" size="lg" aria-label="Loading..." value={80} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Card className='bg-[#212329] text-white min-h-[30rem]'>
                        <CardHeader className='relative text-2xl p-7'>
                            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Mensajes Pendientes</p>
                        </CardHeader>
                        <Divider className='bg-[#3a3a3d]' />
                        <CardBody>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="mb-4 w-full">
                                <div className="h-12 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </CardBody>
                    </Card>
                </div>

            </div>

        </>
    );
}
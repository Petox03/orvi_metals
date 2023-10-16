'use client';
import { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import { Card, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

const initialState = {
    products: [],
    selectedItem: null,
    productDeleted: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_SELECTED_ITEM":
            return { ...state, selectedItem: action.payload };
        case "SET_PRODUCT_DELETED":
            return { ...state, productDeleted: action.payload };
        default:
            return state;
    }
}

export default function ProductFeatures() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { products, selectedItem, productDeleted } = state;
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
    const [arrData, setData] = useState([]);


    const fetchProducts = async () => {
        // Obtén los IDs del localStorage
        const cart = localStorage.getItem('cart');
        const cartItems = JSON.parse(cart);
        const cartData = {};

        // Envía los IDs al servidor
        const response = await fetch(`/api/cart?ids=${cart}`, {
            method: 'GET',
        });

        const data = await response.json();
        setData(data);

        cartItems.forEach((item) => {
            const product = data.find((p) => p.id === item.id);

            if (product) {
                cartData[item.id] = {
                    ...product,
                    amount: item.amount,
                };
            }
        });

        dispatch({ type: "SET_PRODUCTS", payload: Object.values(cartData) });
    }

    const hanndleDelete = async (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'));

        onClose();

        setTimeout(() => {
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            dispatch({ type: "SET_PRODUCT_DELETED", payload: !productDeleted });
        }, 200);
    }
    const hanndleDeleteCart = async () => {
        let cart = JSON.parse(localStorage.getItem('cart'));

        onClose();

        setTimeout(() => {
            localStorage.setItem('cart', JSON.stringify([]));
            dispatch({ type: "SET_PRODUCT_DELETED", payload: !productDeleted });
        }, 200);
    }

    useEffect(() => {
        fetchProducts();
    }, [productDeleted]);

    return (
        <>
            <Button color="danger" className="right-3 top-0" onPress={() => {
                dispatch({ type: "SET_SELECTED_ITEM", payload: "deleteAll" });
                onOpen();
            }} isDisabled={arrData.length === 0}>Limpiar Carrito</Button>
            <Modal key={"deleteAll"} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} size="2xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">¿Seguro que quiere limpiar el carrito?</ModalHeader>
                            <ModalBody>
                                <p>Esta acción borrará todos los productos del carrito. ¿Seguro de que quiere continuar?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>
                                    No, cancelar
                                </Button>
                                <Button color="danger" onPress={() => hanndleDeleteCart()}>
                                    Si, eliminar productos
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {products.map(item => (
                <div key={`product-${item.id}`}>
                    <Card className="w-full md:w-[30rem] p-3 ml-0 md:ml-5 mt-7 border-1 shadow-md md:shadow-xl">

                        {/* Desktop */}
                        <CardBody className="hidden md:block">
                            <div className="relative w-5/6">
                                <div className=" flex flex-col md:flex-row">
                                    <Image
                                        src={'/img/icons/b0f7cc.png'}
                                        alt={'product image'}
                                        width={150}
                                        height={150}
                                        className="rounded-lg"
                                    />
                                    <div className="mt-3 ml-0 md:ml-4 flex flex-col">
                                        <h1 className="text-xl">{item.name}</h1>
                                        <p>Cantidad: {item.amount}{item.storageType.Type}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-auto mt-5 md:mt-0 md:absolute md:bottom-3 md:right-3">
                                <Button color="danger" size="md" className="w-full" onPress={() => {
                                    dispatch({ type: "SET_SELECTED_ITEM", payload: item });
                                    onOpen();
                                }}>Borrar</Button>
                            </div>
                        </CardBody>

                        {/* Mobile */}
                        <CardBody className='md:hidden overflow-visible min-h-[20em] max-h-[29em]' >
                            <Image
                                src={'/img/icons/b0f7cc.png'}
                                alt={'product image'}
                                width={600}
                                height={600}
                                className="w-full max-h-[18rem] md:h-full object-cover rounded-lg"
                                priority
                            />
                            <div className="mt-3 ml-0 md:ml-4 flex flex-col">
                                <h1 className="text-xl">{item.name}</h1>
                                <p>tipo: {item.type}</p>
                                <p>Cantidad: {item.amount}{item.storageType.Type}</p>
                            </div>

                        </CardBody>
                        <CardFooter className='md:hidden flex justify-center'>
                            <Button color="danger" size="md" className="w-full" onPress={() => {
                                dispatch({ type: "SET_SELECTED_ITEM", payload: item });
                                onOpen();
                            }}>Borrar</Button>
                        </CardFooter>
                    </Card>

                    {selectedItem && selectedItem.id === item.id && (
                        <Modal backdrop="transparent" key={`modal-${item.id}`} isOpen={isOpen} onClose={onClose} size="2xl">
                            <ModalContent>
                                <ModalHeader className="flex flex-col gap-1">¿Seguro que desea elimiar el producto {item.name} del carrito?</ModalHeader>
                                <ModalBody>Esta acción eliminará el producto del carrito ¿Seguro de que quiere continuar?</ModalBody>
                                <ModalFooter>
                                    <Button color="primary" variant="light" onPress={onClose}>No, cancelar</Button>
                                    <Button color="danger" onPress={() => hanndleDelete(item.id)}>Si, eliminar</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    )}
                </div>
            ))}
        </>
    );
}

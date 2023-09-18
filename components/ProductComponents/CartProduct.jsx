import Image from "next/image";

const fetchProducts = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json());
};

export default async function ProductFeatures({ maxView }) {

    const products = await fetchProducts();

    return (

        <>
            {products.slice(0, maxView).map(item => (
                <div className="relative w-5/6" key={item.id}>
                    <div className="mt-6 flex flex-row">
                        <Image
                            src={'/img/icons/b0f7cc.png'}
                            alt={'product image'}
                            width={150}
                            height={150}
                        />
                        <div className="ml-0 md:ml-4 flex flex-col">
                            <h1 className="text-xl">{item.title}</h1>
                            <p>tipo: L</p>
                            <p>Cantidad: {item.id}</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-2">
                        <p className="hover:text-red-600 cursor-pointer select-none">borrar</p>
                    </div>
                </div>
            ))}
        </>
    );
}
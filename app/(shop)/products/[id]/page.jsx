import Image from "next/image";
import ProductFeatures from "@/components/ProductComponents/ProductFeatures"

const fetchSingleProduct = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json());
};


export default async function SingleProduct({ params }) {

    const { id } = params;

    const product = await fetchSingleProduct(id);

    return (

        <div className="mt-6 container grid grid-cols-1 md:grid-cols-5 gap-x-10">

            <div className="md:col-span-2 grid grid-cols-2 gap-x-3 gap-y-2">
                <Image
                    width={800}
                    height={800}
                    src={'/img/icons/b0f7cc.png'}
                    alt="Product card"
                />
                <Image
                    width={800}
                    height={800}
                    src={'/img/icons/b0f7cc.png'}
                    alt="Product card"
                />
                <Image
                    width={800}
                    height={800}
                    src={'/img/icons/b0f7cc.png'}
                    alt="Product card"
                />
                <Image
                    width={800}
                    height={800}
                    src={'/img/icons/b0f7cc.png'}
                    alt="Product card"
                />
            </div>
            <div className="mt-7 md:ml-12 md:col-span-3">

                <h3 className="text-3xl">{product.title}</h3>
                <p>¡Cotizar Ahora!</p>

                <p className="mt-7">
                    {product.body}
                </p>

                <ProductFeatures/>

            </div>

        </div>

    );

}
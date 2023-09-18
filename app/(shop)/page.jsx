import { Link } from "@nextui-org/link";
import HomeCard from "@/components/HomeComponents/HomeCard";
import HomeCategories from "@/components/HomeComponents/HomeCategories";
import HomeBanner from "@/components/HomeComponents/HomeBanner";
import CardProduct from "@/components/ProductComponents/CardProduct";

export default function Home() {

	return (
		<>
		<main className="py-5">

			<HomeCard />

			<HomeCategories/>

			<HomeBanner/>

			<CardProduct maxView={4}/>

			<div className='mt-10 container flex items-center place-content-center text-xl md:text-3xl'>
                <Link href={'/products'}>Conoce Todos Los Productos ➤</Link>
            </div>

		</main>
		</>
	);
}

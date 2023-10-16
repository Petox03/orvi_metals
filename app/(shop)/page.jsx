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

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
			<CardProduct category={null} maxView={4} action={'best-sellers'}/>
			</div>

			<div className='mt-10 container flex items-center place-content-center text-xl md:text-3xl'>
                <Link href={'/products'}>Conoce Todos Los Productos ➤</Link>
            </div>

		</main>
		</>
	);
}

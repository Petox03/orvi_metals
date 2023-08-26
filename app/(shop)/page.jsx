import { Link } from "@nextui-org/link";
import HomeCard from "@/components/HomeComponents/HomeCard";
import HomeCategories from "@/components/HomeComponents/HomeCategories";
import HomeBanner from "@/components/HomeComponents/HomeBanner";

export default function Home() {

	return (
		<>
		<main className="">

			<HomeCard />

			<HomeCategories/>

			<HomeBanner/>

		</main>
		</>
	);
}

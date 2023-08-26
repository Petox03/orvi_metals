"use client";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

export default function HomeCard(){

	return (
        <section>
				<Card className="w-full h-auto">
					<CardBody className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
						<div>
							<Image src={'/img/homePage/orvi-home-card.png'} width={500} height={500} alt="Orvi-home1"></Image>
						</div>
						<div className="col-span-2 grid content-evenly">
							<h1 className="text-7xl">Orvi Metals</h1>
							<div className="grid grid-cols-2">
								<div>
									<Link
										href={'#'}
										className="text-lg md:text-xl | mt-6 md:mt-0">
										Ver productos ➤
									</Link>
								</div>
								<div>
									<Link
										href={'#'}
										className="text-lg md:text-xl | mt-6 md:mt-0">
										Mis órdenes ➤
									</Link>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</section>
	);
};

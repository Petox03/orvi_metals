"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
	const [count, setCount] = useState(0);


	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<div className="items-center">
			<h1 className="text-sm">Cantidad</h1>
			<div className="flex gap-4 border-2 items-center">
				<Button size="sm" className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-4 py-2 rounded" onClick={decrement}>-</Button>
				<span className="text-xl">{count}</span>
				<Button size="sm" className="bg-transparent hover:bg-zinc-300 dark:hover:bg-zinc-700 text-xl px-4 py-2 rounded" onClick={increment}>+</Button>
			</div>
		</div>
	);
};

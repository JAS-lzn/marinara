import { useSignal } from "@preact/signals";
import { openSauce } from "../sauce/printer.ts";
import CardHolder from "../islands/CardHolder.tsx";

export default function Home() {
	const sauces = useSignal(openSauce());
	return (
		<div class="px-4 py-8 mx-auto bg-[#86efac]">
			<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
				<img
					class="my-6"
					src="/logo.svg"
					width="128"
					height="128"
					alt="the Fresh logo: a sliced lemon dripping with juice"
				/>
				<h1 class="text-4xl font-bold">Welcome to Marinara</h1>
				<p class="my-4">
					Find your sauce
				</p>
				<CardHolder sauce={sauces} />
			</div>
		</div>
	);
}

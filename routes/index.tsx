import { useSignal } from "@preact/signals";
import { openSauce } from "../sauce/printer.ts";
import CardHolder from "../islands/CardHolder.tsx";
import Filter from "../islands/Filter.tsx";

export default function Home() {
	const sauces = useSignal(openSauce());

	const nameFilter = useSignal(false);
	const devFilter = useSignal(false);
	const licFilter = useSignal(false);
	const famFilter = useSignal(false);
	const motionFilter = useSignal(false);
	return (
		<div>
			<div class="px-4 py-8 mx-auto bg-[#F08B86]">
				<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
					<img
						class="my-6"
						src="/logo.svg"
						width="128"
						height="128"
						alt="the Fresh logo: a sliced lemon dripping with juice"
					/>
					<h1 class="text-4xl font-bold">Marinara</h1>
					<p class="my-4">
						Find some tasty open sauce projects today
					</p>
				</div>
			</div>
			<div class="body-holder">
				<Filter
					nameFilter={nameFilter}
					devFilter={devFilter}
					licFilter={licFilter}
					famFilter={famFilter}
					motionFilter={motionFilter}
				/>
				<CardHolder sauce={sauces} />
			</div>
		</div>
	);
}
